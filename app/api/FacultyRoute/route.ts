import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/db";
import Faculty from "@/lib/models/Faculty";


export const GET = async() => {
    try {
        await connect();
        const task=await Faculty.find();

        return NextResponse.json({
             msg: "Getting all Faculty", 
            data: task,
             status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error getting all Faculty", error, status: 404 });
    }
}

export const POST = async(req:NextRequest) => {
    try {
        const {name,profession,description,image,knowmore}=await req.json();
        await connect();
        const task=await Faculty.create({name,profession,description,image,knowmore});

        return NextResponse.json({
             msg: "Getting all Faculty", 
            data: task,
             status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error getting all Faculty", error, status: 404 });
    }
}