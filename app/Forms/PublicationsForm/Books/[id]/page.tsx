"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";

interface Book {
  _id: string;
  chapterTitle: string;
  authors: string[];
  bookTitle: string;
  editors: string[];
  publisher: string;
  publicationYear: string;
  pages: string;
  DOI: string;
  link: string;
}

const EditBookPage = ({ params }: any) => {
  const id = params.id;
  const [book, setBook] = useState<Book>({
    _id: "",
    chapterTitle: "",
    authors: [],
    bookTitle: "",
    editors: [],
    publisher: "",
    publicationYear: "",
    pages: "",
    DOI: "",
    link: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/Books/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch book");
        }

        const responseData = await response.json();
        console.log("Fetched book:", responseData.data);
        setBook(responseData.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  const handleEditBook = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapterTitle: book.chapterTitle,
          authors: book.authors,
          bookTitle: book.bookTitle,
          editors: book.editors,
          publisher: book.publisher,
          publicationYear: book.publicationYear,
          pages: book.pages,
          DOI: book.DOI,
          link: book.link,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to edit book");
      }

      // Optionally handle success or redirect
      console.log("Book edited successfully!");
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Edit Book</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter chapter title"
            value={book.chapterTitle}
            onChange={(e) => setBook({ ...book, chapterTitle: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter authors (comma separated)"
            value={book.authors.join(", ")}
            onChange={(e) =>
              setBook({
                ...book,
                authors: e.target.value
                  .split(",")
                  .map((author) => author.trim()),
              })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter book title"
            value={book.bookTitle}
            onChange={(e) => setBook({ ...book, bookTitle: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter editors (comma separated)"
            value={book.editors.join(", ")}
            onChange={(e) =>
              setBook({
                ...book,
                editors: e.target.value
                  .split(",")
                  .map((editor) => editor.trim()),
              })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter publisher"
            value={book.publisher}
            onChange={(e) => setBook({ ...book, publisher: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="number"
            placeholder="Enter publication year"
            value={book.publicationYear}
            onChange={(e) =>
              setBook({ ...book, publicationYear: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter pages"
            value={book.pages}
            onChange={(e) => setBook({ ...book, pages: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter DOI"
            value={book.DOI}
            onChange={(e) => setBook({ ...book, DOI: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter link"
            value={book.link}
            onChange={(e) => setBook({ ...book, link: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link
          href="/publications"
          onClick={handleEditBook}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Save Changes
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

export default EditBookPage;
