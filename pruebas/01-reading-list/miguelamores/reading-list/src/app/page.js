"use client";

import { useEffect } from "react";
import { useStore } from "./store";
import books from "../../books.json";
import LectureList from "./components/LectureList";
import Book from "./components/Book";

export default function Home() {
  const setAvailableBooks = useStore((state) => state.setAvailableBooks);
  const availableBooks = useStore((state) => state.availableBooks);
  const addToLectureList = useStore((state) => state.addToLectureList);

  useEffect(() => {
    setAvailableBooks(books.library);
  }, []);

  console.log("av: ", availableBooks);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex align-start">
        <ul className="flex flex-wrap justify-between gap-4">
          {availableBooks.map((book, index) => (
            <li key={book.book.ISBN}>
              <Book book={book} index={index} handleClick={addToLectureList} />
            </li>
          ))}
        </ul>
        <LectureList />
      </div>
    </main>
  );
}
