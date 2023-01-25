import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BookRow from "./BookRow";

export default function BookTable({ books, setBooks }) {
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
