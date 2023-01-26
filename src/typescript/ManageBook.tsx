import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../services/BooksService";
import { NewBook } from "./Books";

type Status = "idle" | "submitting" | "submitted";
type Errors = Partial<NewBook>;
type Touched = {
  [key in keyof NewBook]?: boolean;
};

export default function ManageBook() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Touched>({});
  const [book, setBook] = useState<NewBook>({
    title: "",
    subject: "",
  });

  function updateBookState(event: React.ChangeEvent<HTMLInputElement>) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function updateTouchedState(event: React.FocusEvent<HTMLInputElement>) {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  }

  function getErrors() {
    const errors = {} as Errors;
    if (!book.title) {
      errors.title = "Title is required";
    }
    if (!book.subject) {
      errors.subject = "Title is required";
    }

    return errors;
  }

  const errors = getErrors();

  return (
    <>
      <h1>Add Book</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault(); // prevent posting to server
          setStatus("submitting");
          const errorsExist = Object.keys(errors).length > 0;
          if (errorsExist) {
            setStatus("submitted");
            return;
          }
          await addBook(book);
          navigate("/", { state: { showSaveBookSuccess: true } });
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Title"
            name="title"
            onChange={updateBookState}
            onBlur={updateTouchedState}
            error={
              touched.title || (status !== "idle" && Boolean(errors.title))
            }
            helperText={
              touched.title ||
              (status !== "idle" && Boolean(errors.title) && errors.title)
            }
          />
          <TextField
            label="Subject"
            name="subject"
            onChange={updateBookState}
            onBlur={updateTouchedState}
            value={book.subject}
            error={
              touched.subject || (status !== "idle" && Boolean(errors.subject))
            }
            helperText={
              touched.subject ||
              (status !== "idle" && Boolean(errors.subject) && errors.subject)
            }
          />
          <Button
            type="submit"
            variant="contained"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Saving..." : "Save"}
          </Button>
        </Stack>
      </form>
    </>
  );
}
