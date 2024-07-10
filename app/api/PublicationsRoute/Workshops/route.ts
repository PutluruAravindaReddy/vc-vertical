import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Workshops from "@/lib/models/Publications/Workshops";

export const GET = async () => {
  try {
    await connect();
    const workshops = await Workshops.find();

    return NextResponse.json({
      msg: "Getting all Workshops",
      data: workshops,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Workshops",
      error: error,
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      title,
      organizers,
      startDate,
      endDate,
      location,
      link,
    } = await req.json();

    // Ensure required fields are present
    if (!title || !organizers || organizers.length === 0 || !startDate) {
      return NextResponse.json({
        msg: "Title, Organizers, and Start Date are required fields",
        status: 400,
      });
    }

    // Construct the workshop object with only present fields
    const workshopData: any = { title, organizers, startDate };
    if (endDate) workshopData.endDate = endDate;
    if (location) workshopData.location = location;
    if (link) workshopData.link = link;

    await connect();
    const workshop = await Workshops.create(workshopData);

    return NextResponse.json({
      msg: "Workshop created successfully",
      data: workshop,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating Workshop",
      error: error,
      status: 500,
    });
  }
};
