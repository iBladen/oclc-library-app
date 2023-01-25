import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BookRow({ books, book, setBooks }) {
  return (
    <TableRow key={book.id}>
      <TableCell>
        <IconButton
          onClick={() => setBooks(books.filter((b) => b.id !== book.id))}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.subject}</TableCell>
    </TableRow>
  );
}