import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBooks } from "../services/BooksService";
import BookTable from "./BookTable";
import Spinner from "./Spinner";

export type Book = {
  id: number;
  title: string;
  subject: string;
};

export type NewBook = Omit<Book, "id">;

export default function Books() {
  const [showSaveBookSuccess, setShowSaveBookSuccess] = useState(false);
  const { state } = useLocation();
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      const books = await getBooks();
      setBooks(books);
      setIsLoading(false);
    }
    loadBooks();

    setShowSaveBookSuccess(state?.showSaveBookSuccess === true ? true : false);
    window.history.replaceState({}, "");
  }, []);

  function handleClose() {
    setShowSaveBookSuccess(false);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>Library App</h1>
          <Snackbar
            open={showSaveBookSuccess}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Book added!
            </Alert>
          </Snackbar>
          <a href="manage-book">Add New Book</a>
          <BookTable books={books} setBooks={setBooks} />
        </>
      )}
    </>
  );
}
