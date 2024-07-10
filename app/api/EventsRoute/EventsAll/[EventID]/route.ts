import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Events from "@/lib/models/Events";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { EventID } = params;
    await connect();

    const event = await Events.findById(EventID);
    if (!event) {
      return NextResponse.json({ msg: "Event not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting Event", data: event, status: 200 });
  } catch (error) {
    console.error("Error in fetching single Event:", error);
    return NextResponse.json({ msg: "Error in fetching single Event", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { EventID } = params;
    await connect();
    
    const event = await Events.findById(EventID);
    if (!event) {
      return NextResponse.json({ msg: "Event not found", status: 404 });
    }

    // Delete the event image from Cloudinary
    const imageUrlParts = event.images.map((image: string) => {
      const imageUrlParts = image.split('/');
      const folderPath = imageUrlParts.slice(-3, -1).join('/'); 
      const imageName = imageUrlParts.slice(-1)[0].split('.')[0]; 
      return `${folderPath}/${imageName}`;
    });

    await Promise.all(imageUrlParts.map(async (imagePublicId: string) => {
      console.log("Deleting image from Cloudinary:", imagePublicId);
      await cloudinary.uploader.destroy(imagePublicId);
    }));

    // Delete the event from the database
    await Events.findByIdAndDelete(EventID);

    return NextResponse.json({ msg: "Event deleted successfully", data: event, status: 200 });
  } catch (error) {
    console.error("Error deleting Event:", error);
    return NextResponse.json({ msg: "Error deleting Event", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { EventID } = params;
    const { title, description, date, organizer, location, images } = await req.json();

    await connect();
      
    const updatedEvent = await Events.findByIdAndUpdate(
      EventID,
      { title, description, date, organizer, location, images },
      { new: true } // Return the updated document
    );

    if (!updatedEvent) {
      return NextResponse.json({ msg: "Event not found", status: 404 });
    }

    console.log('Updated Event:', updatedEvent);
  
    return NextResponse.json({
      msg: "Event updated successfully",
      data: updatedEvent,
      status: 200
    });
  } catch (error) {
    console.error('Error updating Event:', error);
    return NextResponse.json({
      msg: "Error updating Event",
      error,
      status: 500
    });
  }
};