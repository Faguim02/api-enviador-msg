import { db } from "../db.js";

export async function MessagesService(){
    try{
        let messages = await db.query('select * from messages')
        return messages.rows
    }
    catch(err){
        return {erro: "Erro no banco de dados"}
    }
}