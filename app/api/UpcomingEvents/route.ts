import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import UpcomingEvents from "@/lib/models/UpcomingEvents";

export const GET = async () => {
  try {
    await connect();
    const upcomingevents = await UpcomingEvents.find();

    return NextResponse.json({
      msg: "Getting all upcomingevents",
      data: upcomingevents,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all upcomingevents",
      error: error,
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { title } = await req.json();

    // Ensure required fields are present
    if ( !title || title.length === 0) {
      return NextResponse.json({
        msg: "Events are required fields",
        status: 400,
      });
    }

    await connect();
    const upcomingevents = await UpcomingEvents.create({ title });

    return NextResponse.json({
      msg: "upcomingEvents created successfully",
      data: upcomingevents,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating upcomingevents",
      error: error,
      status: 500,
    });
  }
};