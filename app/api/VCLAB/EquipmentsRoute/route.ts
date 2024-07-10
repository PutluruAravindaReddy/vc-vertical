import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/db";
import VCLAB_Equipments from "@/lib/models/VCLAB/Equipments";


export const GET = async() => {
    try {
        await connect();
        const task=await VCLAB_Equipments.find();

        return NextResponse.json({
             msg: "Getting all VCLAB Equipments", 
            data: task,
             status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error getting all VCLAB Equipments", error, status: 404 });
    }
}

export const POST = async(req:NextRequest) => {
    try {
        const {name,manufacturer,installationDate,researchTests,description,image}=await req.json();
        await connect();
        const task=await VCLAB_Equipments.create({name,manufacturer,installationDate,researchTests,description,image});

        return NextResponse.json({
             msg: "Getting all VCLAB Equipments", 
            data: task,
             status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error getting all VCLAB Equipments", error, status: 404 });
    }
}