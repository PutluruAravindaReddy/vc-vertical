import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Books from "@/lib/models/Publications/Books";

export const GET = async () => {
  try {
    await connect();
    const books = await Books.find();

    return NextResponse.json({
      msg: "Getting all Books",
      data: books,
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error getting all Books",
      error: error,
      status: 500
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const {
      chapterTitle,
      authors,
      bookTitle,
      editors,
      publisher,
      publicationYear,
      pages,
      DOI,
      link
    } = await req.json();

    // Ensure required fields are present
    if (!chapterTitle || !authors || authors.length === 0 || !bookTitle || !publisher || !publicationYear || !pages) {
      return NextResponse.json({
        msg: "Chapter title, Authors, Book title, Publisher, Publication year, and Pages are required fields",
        status: 400
      });
    }

    // Construct the book object with only present fields
    const bookData: any = { chapterTitle, authors, bookTitle, publisher, publicationYear, pages };
    if (editors) bookData.editors = editors;
    if (DOI) bookData.DOI = DOI;
    if (link) bookData.link = link;

    await connect();
    const book = await Books.create(bookData);

    return NextResponse.json({
      msg: "Book created successfully",
      data: book,
      status: 201
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Error creating book",
      error: error,
      status: 500
    });
  }
};
