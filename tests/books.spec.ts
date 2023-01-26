import { test, expect, Page } from "@playwright/test";

const DESIGN_BOOK_NAME = "The Design of Everyday Things";
const DESIGN_BOOK_SUBJECT = "Design";
const MOST_HUMAN_BOOK_NAME = "The Most Human Human";
const MOST_HUMAN_BOOK_SUBJECT = "Computer Science";

async function checkInitialBookState(page: Page) {
  const progressBar = page.getByRole("progressbar");
  await expect(progressBar).toHaveCount(1);
  await expect(progressBar).toHaveCount(0);

  await expect(page.getByText(DESIGN_BOOK_NAME)).toHaveCount(1);
  await expect(page.getByText(MOST_HUMAN_BOOK_NAME)).toHaveCount(1);
}

async function deleteBook(page: Page, bookTitle: string) {
  const bookDeleteButton = page.getByRole("button", {
    name: "Delete " + bookTitle,
  });
  const book = page.getByText(bookTitle);
  const successfulDeleteAlert = page.getByText("Book deleted!");

  await expect(book).toHaveCount(1);
  await bookDeleteButton.click();
  await expect(book).toHaveCount(0);
  await expect(successfulDeleteAlert).toHaveCount(1);
}

async function addBook(page: Page, bookTitle: string, subject: string) {
  await expect(page).toHaveURL("http://localhost:5173/");
  const newBookLink = page.getByText("Add New Book");
  await newBookLink.click();
  await expect(page).toHaveURL("http://localhost:5173/manage-book");

  const titleInput = page.getByLabel("Title");
  const subjectInput = page.getByLabel("Subject");
  const submitButton = page.getByRole("button", { name: "Save" });
  const successfulAddAlert = page.getByText("Book added!");

  await titleInput.fill(bookTitle);
  await subjectInput.fill(subject);
  await submitButton.click();
  await expect(successfulAddAlert).toHaveCount(1);
}

test.only("Should display books, deleting books and adding books", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await checkInitialBookState(page);

  await deleteBook(page, DESIGN_BOOK_NAME);
  await deleteBook(page, MOST_HUMAN_BOOK_NAME);

  await addBook(page, DESIGN_BOOK_NAME, DESIGN_BOOK_SUBJECT);
  await addBook(page, MOST_HUMAN_BOOK_NAME, MOST_HUMAN_BOOK_SUBJECT);
});

test("Should navigate using the nav bar correctly", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const homeAnchorNav = page.getByRole("link", {
    name: "Home",
  });
  const aboutAnchorNav = page.getByRole("link", {
    name: "About",
  });

  await expect(aboutAnchorNav).toHaveCount(1);
  await aboutAnchorNav.click();
  await expect(page).toHaveURL(/about/);

  await expect(homeAnchorNav).toHaveCount(1);
  await homeAnchorNav.click();
  await expect(page).toHaveURL(/\//);
});
