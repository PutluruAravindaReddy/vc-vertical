import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Faculty from "@/lib/models/Faculty";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { FacultyID } = params;
    await connect();

    const faculty = await Faculty.findById(FacultyID);
    if (!faculty) {
      return NextResponse.json({ msg: "Faculty not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting Faculty", data: faculty, status: 200 });
  } catch (error) {
    console.error("Error in fetching single Faculty:", error);
    return NextResponse.json({ msg: "Error in fetching single Faculty", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { FacultyID } = params;
    await connect();
    
    const faculty = await Faculty.findById(FacultyID);
    if (!faculty) {
      return NextResponse.json({ msg: "Faculty not found", status: 404 });
    }

    const imageUrlParts = faculty.image.split('/');
    const folderPath = imageUrlParts.slice(-3, -1).join('/'); // Extract the folder path 'vc_vertical/LabFocus'
    const imageName = imageUrlParts.slice(-1)[0].split('.')[0]; // Extract the image name without the extension 'qseorjrtsfnszqm6f7li'
    const imagePublicId = `${folderPath}/${imageName}`;
    console.log("Deleting image from Cloudinary:", imagePublicId);

    await new Promise((resolve, reject) => {
      cloudinary.uploader.destroy(imagePublicId, (error: any, result: unknown) => {
        if (error) return reject(error);
        resolve(result);
      });
    });

    // Delete the faculty from the database
    await Faculty.findByIdAndDelete(FacultyID);

    return NextResponse.json({ msg: "Faculty deleted successfully", data: faculty, status: 200 });
  } catch (error) {
    console.error("Error deleting Faculty:", error);
    return NextResponse.json({ msg: "Error deleting Faculty", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { FacultyID } = params;
    const { name, profession, description, image, knowmore } = await req.json();

    await connect();
      
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      FacultyID,
      { name, profession, description, image, knowmore },
      { new: true } // Return the updated document
    );

    if (!updatedFaculty) {
      return NextResponse.json({ msg: "Faculty not found", status: 404 });
    }

    console.log('Updated Faculty:', updatedFaculty);
  
    return NextResponse.json({
      msg: "Faculty updated successfully",
      data: updatedFaculty,
      status: 200
    });
  } catch (error) {
    console.error('Error updating Faculty:', error);
    return NextResponse.json({
      msg: "Error updating Faculty",
      error,
      status: 500
    });
  }
};
