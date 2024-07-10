import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Patents from "@/lib/models/Publications/Patents";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { PatentID } = params;
    await connect();

    const patents = await Patents.findById(PatentID);
    if (!patents) {
      return NextResponse.json({ msg: "Patent not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting patent", data: patents, status: 200 });
  } catch (error) {
    console.error("Error in fetching single patent:", error);
    return NextResponse.json({ msg: "Error in fetching single patent", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { PatentID } = params;
    await connect();
    
    const patents = await Patents.findById(PatentID);
    if (!patents) {
      return NextResponse.json({ msg: "Patent not found", status: 404 });
    }

    // Delete the patent from the database
    await Patents.findByIdAndDelete(PatentID);

    return NextResponse.json({ msg: "Patent deleted successfully", data: patents, status: 200 });
  } catch (error) {
    console.error("Error deleting patent:", error);
    return NextResponse.json({ msg: "Error deleting patent", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { PatentID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedPatents = await Patents.findByIdAndUpdate(
      PatentID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedPatents) {
      return NextResponse.json({ msg: "Patent not found", status: 404 });
    }

    console.log('Updated patent:', updatedPatents);

    return NextResponse.json({
      msg: "Patent updated successfully",
      data: updatedPatents,
      status: 200
    });
  } catch (error) {
    console.error('Error updating patent:', error);
    return NextResponse.json({
      msg: "Error updating patent",
      error,
      status: 500
    });
  }
};