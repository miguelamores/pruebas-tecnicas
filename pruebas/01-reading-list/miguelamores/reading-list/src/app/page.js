"use client";

import { useEffect } from "react";
import { useStore } from "./store";
import books from "../../books.json";
import LectureList from "./components/LectureList";
import Book from "./components/Book";

export default function Home() {
  const setAvailableBooks = useStore((state) => state.setAvailableBooks);
  const availableBooks = useStore((state) => state.availableBooks);
  const availableBooksLength = useStore((state) => state.availableBooksLength);
  const addToLectureList = useStore((state) => state.addToLectureList);

  useEffect(() => {
    setAvailableBooks(books.library);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-start">
        <div className="flex flex-col gap-4 lg:min-w-[60vw] md:min-w-[60vw]">
          <p className="text-center text-base text-slate-900 mb-4 ">
            You have <b>{availableBooksLength}</b> books in your available list
          </p>

          <ul className="flex flex-wrap justify-between gap-4">
            {availableBooks.map((book, index) => (
              <li className="w-[180px] h-min" key={book.book.ISBN}>
                <Book
                  book={book}
                  index={index}
                  handleClick={addToLectureList}
                />
              </li>
            ))}
          </ul>
        </div>
        <LectureList />
      </div>
    </main>
  );
}
