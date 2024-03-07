import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const POST = async(req:Request,res:Response) => {
    const {name,email,message} = await req.json();

    try {
        const result = await sql`CREATE TABLE IF NOT EXISTS Message ( Name varchar(255), Email varchar(255),Message varchar(255) );`;
        const data = [name,email,message];
        await sql `INSERT INTO Message (Name,Email,Message) VALUES (${data[0]},${data[1]},${data[2]});`;

    } catch (error) {
        return NextResponse.json({message: "Error",error},{
            status:500,
        });
    }
    const data =await sql `SELECT * FROM Message;`;
    return NextResponse.json({data: data.rows},{status:200});
}