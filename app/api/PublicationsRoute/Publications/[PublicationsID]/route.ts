import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Publications from "@/lib/models/Publications/Publications";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { PublicationsID } = params;
    await connect();

    const publications = await Publications.findById(PublicationsID);
    if (!publications) {
      return NextResponse.json({ msg: "publications not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting publications", data: publications, status: 200 });
  } catch (error) {
    console.error("Error in fetching single publications:", error);
    return NextResponse.json({ msg: "Error in fetching single publications", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { PublicationsID } = params;
    await connect();
    
    const publications = await Publications.findById(PublicationsID);
    if (!publications) {
      return NextResponse.json({ msg: "publications not found", status: 404 });
    }

    // const imageUrlParts = publications.image.split('/');
    // const folderPath = imageUrlParts.slice(-3, -1).join('/'); // Extract the folder path 'vc_vertical/LabFocus'
    // const imageName = imageUrlParts.slice(-1)[0].split('.')[0]; // Extract the image name without the extension 'qseorjrtsfnszqm6f7li'
    // const imagePublicId = `${folderPath}/${imageName}`;
    // console.log("Deleting image from Cloudinary:", imagePublicId);

    // await new Promise((resolve, reject) => {
    //   cloudinary.uploader.destroy(imagePublicId, (error: any, result: unknown) => {
    //     if (error) return reject(error);
    //     resolve(result);
    //   });
    // });

    // Delete the faculty from the database
    await Publications.findByIdAndDelete(PublicationsID);

    return NextResponse.json({ msg: "publications deleted successfully", data: publications, status: 200 });
  } catch (error) {
    console.error("Error deleting publications:", error);
    return NextResponse.json({ msg: "Error deleting Faculty", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { PublicationsID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedPublication = await Publications.findByIdAndUpdate(
      PublicationsID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedPublication) {
      return NextResponse.json({ msg: "Publication not found", status: 404 });
    }

    console.log('Updated publication:', updatedPublication);

    return NextResponse.json({
      msg: "Publication updated successfully",
      data: updatedPublication,
      status: 200
    });
  } catch (error) {
    console.error('Error updating publication:', error);
    return NextResponse.json({
      msg: "Error updating publication",
      error,
      status: 500
    });
  }
};