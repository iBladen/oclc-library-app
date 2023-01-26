import {
  Alert,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Book } from "./Books";
import BookRow from "./BookRow";
import { useState } from "react";

type BookTableProps = {
  books: Book[];
  setBooks: (books: Book[]) => void;
};

export default function BookTable({ books, setBooks }: BookTableProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  function handleClose() {
    setShowDeleteConfirmation(false);
  }

  return (
    <>
      <Snackbar
        open={showDeleteConfirmation}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Book deleted!
        </Alert>
      </Snackbar>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <Table>
          <caption>List of Books</caption>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <BookRow
                key={book.id}
                book={book}
                books={books}
                setBooks={setBooks}
                setShowDeleteConfirmation={setShowDeleteConfirmation}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
