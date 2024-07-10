import { NextRequest, NextResponse } from "next/server"
import LabFocus from "@/lib/models/LabFocus";
import connect from "@/lib/db";


export const GET = async() => {
    try {
        await connect();
        const task=await LabFocus.find();

        return NextResponse.json({
             msg: "Getting all tasks", 
            data: task,
             status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error getting all", error, status: 404 });
    }
}

export const POST = async(req:NextRequest) => {
    try {
        const {title,description,image}=await req.json();
        await connect();
        const task=await LabFocus.create({title,description,image});

        return NextResponse.json({
             msg: "Getting all tasks", 
            data: task,
             status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error getting all", error, status: 404 });
    }
}