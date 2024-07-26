"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

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

const BooksList = () => {
  const { data: session } = useSession();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/PublicationsRoute/Books', {
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
      const response = await fetch(`/api/PublicationsRoute/Books/${id}`, {
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

  function handleDeletePublication(_id: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book._id} className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl dark:text-[#EDEDED] font-bold text-justify mb-2">{book.chapterTitle}</h2>
          
          {/* Authors */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Authors:</strong> {book.authors.join(', ')}
          </p>
          
          {/* Editors (if available) */}
          {book.editors && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className="dark:text-gray-200">Editors:</strong> {book.editors.join(', ')}
            </p>
          )}
          
          {/* Book Title */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Book Title:</strong> {book.bookTitle}
          </p>
          
          {/* Publisher */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Publisher:</strong> {book.publisher}
          </p>
          
          {/* Publication Year */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Publication Year:</strong> {book.publicationYear}
          </p>
          
          {/* Pages */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Pages:</strong> {book.pages}
          </p>
          
          {/* DOI (if available) */}
          {book.DOI && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className="dark:text-gray-200">DOI:</strong>{' '}
              <a href={book.DOI} target="_blank" rel="noopener noreferrer">
                {book.DOI}
              </a>
            </p>
          )}
          
          {/* Link (if available) */}
          {book.link && (
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline block"
            >
              Read More
            </a>
          )}
          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/PublicationsForm/Books/${book._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/Books/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeletePublication(book._id)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BooksList;
