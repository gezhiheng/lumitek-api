import express from 'express'
import EPBRouter from './epb'

const router = express.Router()

router.use('/epb', EPBRouter)

export default router
