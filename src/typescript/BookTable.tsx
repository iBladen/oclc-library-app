import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Book } from "./Books";
import BookRow from "./BookRow";

type BookTableProps = {
  books: Book[];
  setBooks: (books: Book[]) => void;
};

export default function BookTable({ books, setBooks }: BookTableProps) {
  return (
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
          />
        ))}
      </TableBody>
    </Table>
  );
}
