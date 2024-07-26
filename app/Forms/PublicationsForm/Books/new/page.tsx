"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";

const AddBookPage = () => {
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [authors, setAuthors] = useState<string>("");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [editors, setEditors] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [publicationYear, setPublicationYear] = useState<string>("");
  const [pages, setPages] = useState<string>("");
  const [DOI, setDOI] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const handleAddBook = async () => {
    if (
      !chapterTitle ||
      !authors ||
      !bookTitle ||
      !publisher ||
      !publicationYear ||
      !pages
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const authorsArray = authors.split(",").map((author) => author.trim());
    const editorsArray = editors.split(",").map((editor) => editor.trim());

    try {
      const response = await fetch("/api/PublicationsRoute/Books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapterTitle,
          authors: authorsArray,
          bookTitle,
          editors: editorsArray.length ? editorsArray : undefined,
          publisher,
          publicationYear,
          pages,
          DOI,
          link,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Optionally handle success or redirect
      console.log("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Add Book</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter chapter title"
            value={chapterTitle}
            onChange={(e) => setChapterTitle(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter authors (comma separated)"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter book title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter editors (comma separated, optional)"
            value={editors}
            onChange={(e) => setEditors(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="number"
            placeholder="Enter publication year"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter DOI (optional)"
            value={DOI}
            onChange={(e) => setDOI(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link
          href="/publications"
          onClick={handleAddBook}
          className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer"
        >
          Add Book
        </Link>
        <Link
          href="/publications"
          className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4"
        >
          Back to Books
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AddBookPage;
