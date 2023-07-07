import pg from 'pg'

export const db = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'BncdD123',
    database: 'anonimo'
})

export async function connectDB(){
    await db.connect()
}