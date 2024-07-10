import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Courses from "@/lib/models/Publications/Courses";

export const GET = async () => {
  try {
    await connect();
    const courses = await Courses.find();

    return NextResponse.json({
      msg: "Getting all Courses",
      data: courses,
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Courses",
      error: error,
      status: 500
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      courseName,
      faculty,
      completionDate,
      platform,
      duration,
      badgeEarned
    } = await req.json();

    // Ensure required fields are present
    if (!courseName || !faculty || faculty.length === 0 || !completionDate || !platform) {
      return NextResponse.json({
        msg: "Course Name, Faculty, Completion Date, and Platform are required fields",
        status: 400
      });
    }

    // Construct the course object with only present fields
    const courseData: any = { courseName, faculty, completionDate, platform };
    if (duration) courseData.duration = duration;
    if (badgeEarned) courseData.badgeEarned = badgeEarned;

    await connect();
    const course = await Courses.create(courseData);

    return NextResponse.json({
      msg: "Course created successfully",
      data: course,
      status: 201
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating course",
      error: error,
      status: 500
    });
  }
};