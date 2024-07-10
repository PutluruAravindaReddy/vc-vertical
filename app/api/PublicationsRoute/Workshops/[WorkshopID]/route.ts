import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Workshops from "@/lib/models/Publications/Workshops";

// GET handler for fetching a single workshop by ID
export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { WorkshopID } = params;
    await connect();

    const workshop = await Workshops.findById(WorkshopID);
    if (!workshop) {
      return NextResponse.json({ msg: "Workshop not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting workshop", data: workshop, status: 200 });
  } catch (error) {
    console.error("Error in fetching single workshop", error);
    return NextResponse.json({ msg: "Error in fetching single workshop", error, status: 500 });
  }
};

// DELETE handler for deleting a workshop by ID
export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { WorkshopID } = params;
    await connect();
    
    const workshop = await Workshops.findById(WorkshopID);
    if (!workshop) {
      return NextResponse.json({ msg: "Workshop not found", status: 404 });
    }

    // Delete the workshop from the database
    await Workshops.findByIdAndDelete(WorkshopID);

    return NextResponse.json({ msg: "Workshop deleted successfully", data: workshop, status: 200 });
  } catch (error) {
    console.error("Error deleting workshop:", error);
    return NextResponse.json({ msg: "Error deleting workshop", error, status: 500 });
  }
};

// PATCH handler for updating a workshop by ID
export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { WorkshopID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedWorkshop = await Workshops.findByIdAndUpdate(
      WorkshopID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedWorkshop) {
      return NextResponse.json({ msg: "Workshop not found", status: 404 });
    }

    console.log('Updated Workshop:', updatedWorkshop);

    return NextResponse.json({
      msg: "Workshop updated successfully",
      data: updatedWorkshop,
      status: 200
    });
  } catch (error) {
    console.error('Error updating workshop:', error);
    return NextResponse.json({
      msg: "Error updating workshop",
      error,
      status: 500
    });
  }
};
