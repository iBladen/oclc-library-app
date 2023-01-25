import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BookRowJs({ books, book, setBooks }) {
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

BookRowJs.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object({
      id: PropTypes.number.isRequired,
      title: PropTypes.number.isRequired,
      subject: PropTypes.number.isRequired,
    })
  ),
  book: PropTypes.object({
    id: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    subject: PropTypes.number.isRequired,
  }),
  setBooks: PropTypes.func.isRequired,
};
