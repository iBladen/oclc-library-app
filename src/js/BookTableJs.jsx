import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BookRow from "./BookRow";

export default function BookTableJs({ books, setBooks }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Subject</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map((book) => (
          <BookRow book={book} books={books} setBooks={setBooks} />
        ))}
      </TableBody>
    </Table>
  );
}

BookTableJs.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object({
      id: PropTypes.number.isRequired,
      title: PropTypes.number.isRequired,
      subject: PropTypes.number.isRequired,
    })
  ),
  setBooks: PropTypes.func.isRequired,
};
