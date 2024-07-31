import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import UpcomingEvents from "@/lib/models/UpcomingEvents";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { UpcomingEventID } = params;
    await connect();

    const upcomingevent = await UpcomingEvents.findById(UpcomingEventID);
    if (!upcomingevent) {
      return NextResponse.json({ msg: "UpcomingEvents not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting UpcomingEvents", data: upcomingevent, status: 200 });
  } catch (error) {
    console.error("Error in fetching single UpcomingEvent", error);
    return NextResponse.json({ msg: "Error in fetching single UpcomingEvent", error, status: 500 });
  }
};


export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { UpcomingEventID } = params;
    await connect();
    
    const upcomingevent = await UpcomingEvents.findById(UpcomingEventID);
    if (!upcomingevent) {
      return NextResponse.json({ msg: "UpcomingEvent not found", status: 404 });
    }

    // Delete the research outcome from the database
    await UpcomingEvents.findByIdAndDelete(UpcomingEventID);

    return NextResponse.json({ msg: "UpcomingEvent deleted successfully", data: upcomingevent, status: 200 });
  } catch (error) {
    console.error("Error deleting UpcomingEvent:", error);
    return NextResponse.json({ msg: "Error deleting UpcomingEvent", error, status: 500 });
  }
};


export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { UpcomingEventID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedupcomingevent = await UpcomingEvents.findByIdAndUpdate(
      UpcomingEventID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedupcomingevent) {
      return NextResponse.json({ msg: "UpcomingEvent not found", status: 404 });
    }

    console.log('Updated UpcomingEvent:', updatedupcomingevent);

    return NextResponse.json({
      msg: "UpcomingEvent updated successfully",
      data: updatedupcomingevent,
      status: 200
    });
  } catch (error) {
    console.error('Error updating UpcomingEvent:', error);
    return NextResponse.json({
      msg: "Error updating UpcomingEvent",
      error,
      status: 500
    });
  }
};