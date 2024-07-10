import { NextRequest, NextResponse } from "next/server"
import LabFocus from "@/lib/models/LabFocus";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";

export const GET=async(req: NextRequest, { params }: any) => {
  try{
    const {LabFocusID}=params;
    await connect();

    const task=await LabFocus.findById(LabFocusID);
    if(!task){
        return NextResponse.json({msg:"Task not found",status:404});
    }
    return NextResponse.json({msg:"Getting task",data:task,status:200});
  }catch(error){
    return NextResponse.json({ msg: "Error in fetching single task", error, status: 500 });
  }
}

export const DELETE = async (req: NextRequest, { params }: any) => {
    try {
      const { LabFocusID } = params;
      await connect();
      
      const task = await LabFocus.findById(LabFocusID);
      if (!task) {
        return NextResponse.json({ msg: "Task not found", status: 404 });
      }
  
      const imageUrlParts = task.image.split('/');
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
  
      // Delete the task from the database
      await LabFocus.findByIdAndDelete(LabFocusID);
  
      return NextResponse.json({ msg: "Task and image deleted successfully", data: task, status: 200 });
    } catch (error) {
      return NextResponse.json({ msg: "Error deleting task and image", error, status: 500 });
    }
  }

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { LabFocusID } = params;
    const { title,description, image } =await req.json();

    await connect();
      
    const updatedTask = await LabFocus.findByIdAndUpdate(
      LabFocusID,
      { title,description, image },
      { new: true } 
    );

    if (!updatedTask) {
      return NextResponse.json({
        msg: "Task not found",
        status: 404
      });
    }

    console.log('Updated task:', updatedTask);
  
    return NextResponse.json({
      msg: "Task updated successfully",
      data: updatedTask,
      status: 200
    });
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({
      msg: "Error updating task",
      error,
      status: 500
    });
  }
};
