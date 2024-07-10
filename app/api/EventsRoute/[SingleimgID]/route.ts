import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/db";
import Events from "@/lib/models/Events";
import cloudinary from "@/lib/cloudinary";


export const POST = async (req: NextRequest,{params}:any) => {
    try {
        const {SingleimgID} =params;
        await connect();
        const result=await cloudinary.uploader.destroy(`vc_vertical/Events/${SingleimgID}`);
        console.log("result",result);
        const events = await Events.find();

        return NextResponse.json({
            msg: "Getting all Events",
            data: events,
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            msg: "Error getting all Events",
            error,
            status: 404
        });
    }
};