import express from 'express'
import { MessagesController } from './ViewMessages/MessagesControll.js'
import { CreateController } from './CreateMessage/CreateController.js'
import { connectDB, db } from './db.js'

export const router = express.Router()
async function closeDB(req, res, next){
    next()

    await db.end()
}

connectDB()

//ver
router.get('/messages', (req, res) => MessagesController(req, res))
//postar
router.post('/post', (req, res) => CreateController(req, res))