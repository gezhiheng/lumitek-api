import express from 'express'
import featuresRouter from './features'
import EPRouter from './ep'

const router = express.Router()

router.use('/api', featuresRouter)
router.use('/api/ep', EPRouter)

export default router
