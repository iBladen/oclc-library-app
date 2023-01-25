import {
  Alert,
  IconButton,
  Snackbar,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Book } from "./Books";
import { useState } from "react";

type BookRowProps = {
  books: Book[];
  book: Book;
  setBooks: (books: Book[]) => void;
};
// ?: optional param

export default function BookRow({ books, book, setBooks }: BookRowProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  function handleClose() {
    setShowDeleteConfirmation(false);
  }

  function handleDelete() {
    setBooks(books.filter((b) => b.id !== book.id));
    debugger;
    setShowDeleteConfirmation(true);
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label={"Delete " + book.title}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.subject}</TableCell>
      </TableRow>

      <Snackbar
        open={showDeleteConfirmation}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Book deleted!
        </Alert>
      </Snackbar>
    </>
  );
}
