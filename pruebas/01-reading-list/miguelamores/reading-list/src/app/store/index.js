import { create } from "zustand";

export const useStore = create((set) => ({
  originalList: [],
  availableBooks: [],
  availableBooksLength: 0,
  lectureList: [],
  lectureListLength: 0,
  filter: "all",
  setAvailableBooks: (books) =>
    set({
      availableBooks: books,
      availableBooksLength: books.length,
      originalList: books,
    }),
  addToLectureList: (lecture, index) =>
    set((state) => {
      const filteredAvailableBooks = state.availableBooks.filter(
        ({ book }) => book.ISBN !== lecture.book.ISBN
      );

      const newLectureList = [...state.lectureList, { ...lecture, index }];

      return {
        lectureList: newLectureList,
        lectureListLength: newLectureList.length,
        availableBooks: filteredAvailableBooks,
        availableBooksLength: filteredAvailableBooks.length,
      };
    }),
  removeFromLectureList: (lecture) =>
    set((state) => {
      const filteredLectures = state.lectureList.filter(
        ({ book }) => book.ISBN !== lecture.book.ISBN
      );
      const filteredAvailableBooks = [...state.availableBooks];
      filteredAvailableBooks.splice(lecture.index, 0, lecture);
      return {
        lectureList: filteredLectures,
        lectureListLength: filteredLectures.length,
        availableBooks: filteredAvailableBooks,
        availableBooksLength: filteredAvailableBooks.length,
      };
    }),
  setFilter: (filter) =>
    set((state) => {
      const originalListFilteredLectureList = [...state.originalList].filter(
        ({ book }) =>
          book.ISBN !==
          state.lectureList.find((lecture) => lecture.book.ISBN === book.ISBN)
            ?.book.ISBN
      );

      if (filter === "all") {
        return {
          filter,
          availableBooks: originalListFilteredLectureList,
          availableBooksLength: originalListFilteredLectureList.length,
        };
      }

      const filteredBooks = originalListFilteredLectureList.filter(
        ({ book }) => book.genre === filter
      );
      return {
        filter,
        availableBooks: filteredBooks,
        availableBooksLength: filteredBooks.length,
      };
    }),
}));
