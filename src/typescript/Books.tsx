import { useEffect, useState } from "react";
import { getBooks } from "../services/BooksService";
import BookTable from "./BookTable";
import Spinner from "./Spinner";

export type Book = {
  id: number;
  title: string;
  subject: string;
};

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      console.log("hello");
      const books = await getBooks();
      setBooks(books);
      setIsLoading(false);
    }
    loadBooks();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>Library App</h1>
          <a href="manage-book">Add Book</a>
          {books.length > 0 ? (
            <BookTable books={books} setBooks={setBooks} />
          ) : (
            <p>No books available.</p>
          )}
        </>
      )}
    </>
  );
}
