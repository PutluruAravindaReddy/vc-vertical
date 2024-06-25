interface Book {
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
interface BooksListProps {
  books: Book[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl font-bold text-justify mb-2">{book.chapterTitle}</h2>
          
          {/* Authors */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Authors:</strong> {book.authors.join(', ')}
          </p>
          
          {/* Editors (if available) */}
          {book.editors && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Editors:</strong> {book.editors.join(', ')}
            </p>
          )}
          
          {/* Book Title */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Book Title:</strong> {book.bookTitle}
          </p>
          
          {/* Publisher */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Publisher:</strong> {book.publisher}
          </p>
          
          {/* Publication Year */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Publication Year:</strong> {book.publicationYear}
          </p>
          
          {/* Pages */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Pages:</strong> {book.pages}
          </p>
          
          {/* DOI (if available) */}
          {book.DOI && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>DOI:</strong>{' '}
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
        </div>
      ))}
    </div>
  );
};

export default BooksList;
