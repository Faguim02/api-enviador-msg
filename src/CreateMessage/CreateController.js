import { CreateService } from "./CreateService.js"

export async function CreateController(req, res){
    const {people, message} = req.body

    let people_real = people != "" ? people : "Anonimo"

    var data = new Date()
    var dia = String(data.getDate()).padStart(2, '0')
    var mes = String(data.getMonth() + 1).padStart(2, '0')
    var ano = data.getFullYear()

    const date_public = `${data.getHours()}:${data.getMinutes()} - ${dia}/${mes}/${ano}`

    const post = await CreateService( message, people_real, date_public)

    return res.json(post)
}