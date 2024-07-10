"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Book {
  _id: string;
  chapterTitle: string;
  authors: string[];
  bookTitle: string;
  editors?: string[];
  publisher: string;
  publicationYear: number;
  pages: string;
  DOI?: string;
  link?: string;
}

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/Books', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const responseData = await response.json();
        console.log('Fetched books:', responseData.data);
        setBooks(responseData.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleDeleteBook = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/Books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete book');
      }

      const updatedBooks = books.filter(book => book._id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      <Link href="/Forms/PublicationsForm/Books/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">
        Add Book
      </Link>
      {books.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Books</h2>
          <div className="grid grid-cols-3 gap-4">
            {books.map((book) => (
              <div key={book._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">Chapter Title: {book.chapterTitle}</p>
                <p className="text-lg font-medium mb-2">Authors: {book.authors.join(', ')}</p>
                <p className="text-lg font-medium mb-2">Book Title: {book.bookTitle}</p>
                {book.editors && <p className="text-lg font-medium mb-2">Editors: {book.editors.join(', ')}</p>}
                <p className="text-lg font-medium mb-2">Publisher: {book.publisher}</p>
                <p className="text-lg font-medium mb-2">Publication Year: {book.publicationYear}</p>
                <p className="text-lg font-medium mb-2">Pages: {book.pages}</p>
                {book.DOI && <p className="text-lg font-medium mb-2">DOI: {book.DOI}</p>}
                {book.link && <a href={book.link} target="_blank" className="text-blue-600 underline mb-2 block">Link</a>}
                <Link href={`/Forms/PublicationsForm/Books/${book._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
                  Edit
                </Link>
                <button onClick={() => handleDeleteBook(book._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
