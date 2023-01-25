import { test, expect } from "@playwright/test";

test("Should display a list of books and support deleting all books", async ({
  page,
}) => {
  const progressBar = page.getByRole("progressbar");
  const designBook = page.getByRole("button", {
    name: "Delete The Design of Everyday Things",
  });
  const mostHumanBook = page.getByRole("button", {
    name: "Delete The Most Human Human",
  });

  await page.goto("http://localhost:5173/");

  // Should display whilst loading, but disappear after
  await expect(progressBar).toHaveCount(1);
  await expect(progressBar).toHaveCount(0);

  // Check for and delete book 1
  await expect(designBook).toHaveCount(1);
  await designBook.click();
  await expect(designBook).toHaveCount(0);

  // Check for and delete book 2
  await expect(mostHumanBook).toHaveCount(1);
  await mostHumanBook.click();
  await expect(mostHumanBook).toHaveCount(0);

  // All books should be delete so this messaged should display
  await expect(page.getByText("No books available.")).toHaveCount(1);
});

test("Should support adding a new book", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const addBookAnchor = page.getByRole("link", {
    name: "Add Book",
  });

  await expect(addBookAnchor).toHaveCount(1);
  await addBookAnchor.click();
  await expect(page).toHaveURL(/manage-book/);

  const heading = page.getByRole("heading", {
    name: "Add Book",
  });

  await expect(heading).toHaveCount(1);

  // const titleInput = page.getByRole("form", {
  //   name: "Title",
  // });
  // const subjectInput = page.getByRole("form", {
  //   name: "Subject",
  // });
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
