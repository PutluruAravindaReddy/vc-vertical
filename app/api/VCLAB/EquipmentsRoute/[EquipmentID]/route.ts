import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import VCLAB_Equipments from "@/lib/models/VCLAB/Equipments";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { EquipmentID } = params;
    await connect();

    const equipment = await VCLAB_Equipments.findById(EquipmentID);
    if (!equipment) {
      return NextResponse.json({ msg: "VCLAB Equipment not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting Equipment", data: equipment, status: 200 });
  } catch (error) {
    console.error("Error in fetching single Equipment:", error);
    return NextResponse.json({ msg: "Error in fetching single Equipment", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { EquipmentID } = params;
    await connect();
    
    const equipment = await VCLAB_Equipments.findById(EquipmentID);
    if (!equipment) {
      return NextResponse.json({ msg: "Faculty not found", status: 404 });
    }

    const imageUrlParts = equipment.image.split('/');
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
    await VCLAB_Equipments.findByIdAndDelete(EquipmentID);

    return NextResponse.json({ msg: "Equipment deleted successfully", data: equipment, status: 200 });
  } catch (error) {
    console.error("Error deleting Equipment:", error);
    return NextResponse.json({ msg: "Error deleting Equipment", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { EquipmentID } = params;
    const {name,manufacturer,installationDate,researchTests,description,image} = await req.json();

    await connect();
      
    const updatedEquipment = await VCLAB_Equipments.findByIdAndUpdate(
      EquipmentID,
      {name,manufacturer,installationDate,researchTests,description,image},
      { new: true } 
    );

    if (!updatedEquipment) {
      return NextResponse.json({ msg: "Equipment not found", status: 404 });
    }

    console.log('Updated Equipment:', updatedEquipment);
  
    return NextResponse.json({
      msg: "Equipment updated successfully",
      data: updatedEquipment,
      status: 200
    });
  } catch (error) {
    console.error('Error updating Equipment:', error);
    return NextResponse.json({
      msg: "Error updating Equipment",
      error,
      status: 500
    });
  }
};
