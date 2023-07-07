import express from 'express'
import cors from 'cors'
import { router } from './src/router.js'

const server = express()

server.use(express.json())
server.use(cors())

server.use(router)

server.listen(3100, ()=> console.log("Rodando"))