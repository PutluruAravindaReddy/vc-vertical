import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Mail from "@/lib/models/mail";



export const POST=async(req:Request)=>{
    try{
        const body=await req.json();
        await connect();
        const newMail=new Mail(body);
        await newMail.save();
        console.log("Mail saved:", newMail.email);
        return new NextResponse(JSON.stringify({messsage:"Email is added",mail:newMail}),{status:202});

    }catch(error){
        return new NextResponse(JSON.stringify({messsage:"Error in Saving Mail",error}),{status:500});
    }
}