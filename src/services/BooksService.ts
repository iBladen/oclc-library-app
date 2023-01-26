import { NewBook, Book } from "../typescript/Books";

export async function getBooks(): Promise<Book[]> {
  const response = await fetch("http://localhost:3001/books");
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}

export async function deleteBook(id: number): Promise<void> {
  const response = await fetch("http://localhost:3001/books/" + id, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(response.statusText);
}

export async function addBook(book: NewBook): Promise<Book> {
  const response = await fetch("http://localhost:3001/books/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
