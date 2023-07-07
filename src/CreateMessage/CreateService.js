import { db } from "../db.js";

export async function CreateService(message, people, date_public){
    try{
        await db.query(`insert into messages (message, people, date_public) values('${message}', '${people}', '${date_public}')`)
        return {status: "Posted"}
    }catch(err){
        return {message : "Erro no banco"+err}
    }
}