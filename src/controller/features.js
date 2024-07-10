import express from 'express'
import { getFeatures } from '@/service'

const router = express.Router()

router.get('/features', async (_, res) => {
  const features = await getFeatures()
  res.send(features)
})

export default router
