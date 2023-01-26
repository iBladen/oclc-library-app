import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Book } from "./Books";
import { deleteBook } from "../services/BooksService";

type BookRowProps = {
  books: Book[];
  book: Book;
  setBooks: (books: Book[]) => void;
  setShowDeleteConfirmation: (bool: boolean) => void;
};
// ?: optional param

export default function BookRow({
  books,
  book,
  setBooks,
  setShowDeleteConfirmation,
}: BookRowProps) {
  async function handleDelete() {
    await deleteBook(book.id);
    setBooks(books.filter((b) => b.id !== book.id));
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
    </>
  );
}
