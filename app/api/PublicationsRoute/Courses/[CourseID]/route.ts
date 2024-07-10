import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Courses from "@/lib/models/Publications/Courses";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { CourseID } = params;
    await connect();

    const courses = await Courses.findById(CourseID);
    if (!courses) {
      return NextResponse.json({ msg: "Course not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting Course", data: courses, status: 200 });
  } catch (error) {
    console.error("Error in fetching single Course:", error);
    return NextResponse.json({ msg: "Error in fetching single Course", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { CourseID } = params;
    await connect();
    
    const courses = await Courses.findById(CourseID);
    if (!courses) {
      return NextResponse.json({ msg: "Course not found", status: 404 });
    }

    // Delete the patent from the database
    await Courses.findByIdAndDelete(CourseID);

    return NextResponse.json({ msg: "Course deleted successfully", data: courses, status: 200 });
  } catch (error) {
    console.error("Error deleting patent:", error);
    return NextResponse.json({ msg: "Error deleting Course", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { CourseID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedCourses = await Courses.findByIdAndUpdate(
      CourseID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedCourses) {
      return NextResponse.json({ msg: "Course not found", status: 404 });
    }

    console.log('Updated Course:', updatedCourses);

    return NextResponse.json({
      msg: "Course updated successfully",
      data: updatedCourses,
      status: 200
    });
  } catch (error) {
    console.error('Error updating Course:', error);
    return NextResponse.json({
      msg: "Error updating Course",
      error,
      status: 500
    });
  }
};