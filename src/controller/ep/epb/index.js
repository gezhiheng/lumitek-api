import express from 'express'
import EPB21Router from './epb21'

const router = express.Router()

router.use('/epb21', EPB21Router)

export default router
