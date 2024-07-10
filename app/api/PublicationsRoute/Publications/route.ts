import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Publications from "@/lib/models/Publications/Publications";

export const GET = async () => {
  try {
    await connect();
    const publications = await Publications.find();

    return NextResponse.json({
      msg: "Getting all Publications",
      data: publications,
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Publications",
      error: error,
      status: 404
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      title,
      authors,
      journal,
      year,
      pages,
      impactFactor,
      SNIP,
      DOI,
      link,
      date
    } = await req.json();

    // Ensure required fields are present
    if (!title || !authors) {
      return NextResponse.json({
        msg: "Title and Authors are required fields",
        status: 400
      });
    }

    // Construct the publication object with only present fields
    const publicationData: any = { title, authors };
    if (journal) publicationData.journal = journal;
    if (year) publicationData.year = year;
    if (pages) publicationData.pages = pages;
    if (impactFactor) publicationData.impactFactor = impactFactor;
    if (SNIP) publicationData.SNIP = SNIP;
    if (DOI) publicationData.DOI = DOI;
    if (link) publicationData.link = link;
    if (date) publicationData.date = date;

    await connect();
    const publication = await Publications.create(publicationData);

    return NextResponse.json({
      msg: "Publication created successfully",
      data: publication,
      status: 201
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating Publication",
      error: error,
      status: 400
    });
  }
};
