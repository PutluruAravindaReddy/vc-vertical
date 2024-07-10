import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import Books from "@/lib/models/Publications/Books";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { BooksID } = params;
    await connect();

    const books = await Books.findById(BooksID);
    if (!books) {
      return NextResponse.json({ msg: "Book not found", status: 404 });
    }
    
    return NextResponse.json({ msg: "Getting Book", data: books, status: 200 });
  } catch (error) {
    console.error("Error in fetching single Book:", error);
    return NextResponse.json({ msg: "Error in fetching single Book", error, status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { BooksID } = params;
    await connect();
    
    const books = await Books.findById(BooksID);
    if (!books) {
      return NextResponse.json({ msg: "Book not found", status: 404 });
    }

    // Delete the patent from the database
    await Books.findByIdAndDelete(BooksID);

    return NextResponse.json({ msg: "Book deleted successfully", data: books, status: 200 });
  } catch (error) {
    console.error("Error deleting patent:", error);
    return NextResponse.json({ msg: "Error deleting Book", error, status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    const { BooksID } = params;
    const updatedFields = await req.json();

    await connect();

    const updatedBooks = await Books.findByIdAndUpdate(
      BooksID,
      { $set: updatedFields },
      { new: true, runValidators: true } // Return the updated document and run schema validation
    );

    if (!updatedBooks) {
      return NextResponse.json({ msg: "Book not found", status: 404 });
    }

    console.log('Updated Book:', updatedBooks);

    return NextResponse.json({
      msg: "Book updated successfully",
      data: updatedBooks,
      status: 200
    });
  } catch (error) {
    console.error('Error updating Book:', error);
    return NextResponse.json({
      msg: "Error updating Book",
      error,
      status: 500
    });
  }
};