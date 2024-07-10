import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Patents from "@/lib/models/Publications/Patents";


export const GET = async () => {
  try {
    await connect();
    const patents = await Patents.find();

    return NextResponse.json({
      msg: "Getting all Patents",
      data: patents,
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Patents",
      error: error,
      status: 500
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      title,
      journal,
      applicationNumber,
      date,
      dateOfFiling,
      publicationDate,
      dateOfGrant,
      designNumber,
      patentOffice,
      inventors,
      link,
      faculty
    } = await req.json();

    // Ensure required fields are present
    if (!title || !inventors || inventors.length === 0) {
      return NextResponse.json({
        msg: "Title and Inventors are required fields",
        status: 400
      });
    }

    // Construct the patent object with only present fields
    const patentData: any = { title, inventors };
    if (journal) patentData.journal = journal;
    if (applicationNumber) patentData.applicationNumber = applicationNumber;
    if (date) patentData.date = date;
    if (dateOfFiling) patentData.dateOfFiling = dateOfFiling;
    if (publicationDate) patentData.publicationDate = publicationDate;
    if (dateOfGrant) patentData.dateOfGrant = dateOfGrant;
    if (designNumber) patentData.designNumber = designNumber;
    if (patentOffice) patentData.patentOffice = patentOffice;
    if (link) patentData.link = link;
    if (faculty) patentData.faculty = faculty;

    await connect();
    const patents = await Patents.create(patentData);

    return NextResponse.json({
      msg: "Patent created successfully",
      data: patents,
      status: 201
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating patent",
      error: error,
      status: 500
    });
  }
};
