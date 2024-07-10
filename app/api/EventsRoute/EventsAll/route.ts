import { NextRequest, NextResponse } from "next/server"
import connect from "@/lib/db";
import Events from "@/lib/models/Events";


export const GET = async () => {
    try {
        await connect();
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

export const POST = async (req: NextRequest) => {
    try {
        const { title, description, date, organizer, location, images } = await req.json();
        await connect();
        const event = await Events.create({ title, description, date, organizer, location, images });

        return NextResponse.json({
            msg: "Event created successfully",
            data: event,
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            msg: "Error creating event",
            error,
            status: 404
        });
    }
};