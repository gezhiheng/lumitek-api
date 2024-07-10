import express from 'express'
import multer from 'multer'
import xlsx from 'node-xlsx'
import { EP } from '@/service'

const service = EP.EPB.EPB21

const router = express.Router()

router.get('/info', (_, res) => {
  res.send(service.info())
})

const upload = multer()

router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.')
  }

  // 使用node-xlsx库解析Excel文件
  try {
    const sheets = xlsx.parse(req.file.buffer, {
      type: 'buffer',
    })
    const array = service.handleExcelData(sheets)
    res.send(array)
  } catch (error) {
    console.error('Error parsing Excel:', error)
    res.status(500).send('Error parsing Excel file.')
  }
})

export default router
