import { MessagesService } from "./MessagesService.js"

export async function MessagesController(req, res){
    
    let messages = await MessagesService()

    return res.json(messages)
}