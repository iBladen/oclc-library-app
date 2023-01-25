import { useState } from "react";
import BookTable from "./BookTable";

export type Book = {
  id: number;
  title: string;
  subject: string;
};

let defaultBooks: Book[] = [
  {
    id: 1,
    title: "The Design of Everyday Things",
    subject: "Design",
  },
  {
    id: 2,
    title: "The Most Human Human",
    subject: "Computer Science",
  },
];

export default function App() {
  const [books, setBooks] = useState(defaultBooks);
  return (
    <>
      <h1>Library App</h1>
      {books.length > 0 ? (
        <BookTable books={books} setBooks={setBooks} />
      ) : (
        <p>No books found</p>
      )}
    </>
  );
}
