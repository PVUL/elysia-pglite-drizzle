import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { insertBookSchema } from "./schema";
import {
  fetchBooks,
  fetchBook,
  createBook,
  updateBook,
  deleteBook,
} from "./book";

const app = new Elysia();

app.use(swagger({path: "/docs"}));

/**
 * Get all books
 */
app.get("/books", () => {
  return fetchBooks();
});

/**
 * Get book by id
 */
app.get("books/:id", ({ params: { id } }) => fetchBook(id), {
  params: t.Object({
    id: t.Numeric(),
  }),
});

/**
 * Create book
 */
app.post("/books", ({ body }) => createBook(body), {
  body: insertBookSchema,
});

/**
 * Update book
 */
app.put(
  "/books/:id",
  ({ params: { id }, body }) => updateBook(Number(id), body),
  {
    params: t.Object({
      id: t.Numeric(),
    }),
    body: insertBookSchema,
  },
);

/**
 * Delete book
 */
app.delete("/books/:id", ({ params: { id } }) => deleteBook(id), {
  params: t.Object({
    id: t.Numeric(),
  }),
});

app.listen(3000);
