import { eq } from "drizzle-orm";
import { db } from "./db";
import { books } from "./schema";

export const fetchBooks = () => {
  return db.select().from(books);
};

export const fetchBook = (id: number) => {
  return db.select().from(books).where(eq(books.id, id));
};

export const createBook = (
  bookData: Omit<typeof books.$inferInsert, "id" | "createdAt">,
) => {
  return db.insert(books).values(bookData).returning();
};

export const updateBook = (
  id: number,
  bookData: Partial<typeof books.$inferInsert>,
) => {
  return db.update(books).set(bookData).where(eq(books.id, id)).returning();
};

export const deleteBook = (id: number) => {
  return db.delete(books).where(eq(books.id, id)).returning();
};
