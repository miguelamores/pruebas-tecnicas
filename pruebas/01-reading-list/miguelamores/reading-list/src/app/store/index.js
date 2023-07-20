import { create } from "zustand";

export const useStore = create((set) => ({
  availableBooks: [],
  availableBooksLength: 0,
  lectureList: [],
  lectureListLength: 0,
  filter: "all",
  setAvailableBooks: (books) =>
    set({ availableBooks: books, availableBooksLength: books.length }),
  setLectureList: (lectures) =>
    set({ lectureList: lectures, lectureListLength: lectures.length }),
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
      const filteredBooks = state.availableBooks.filter(
        ({ book }) => book.genre === filter
      );
      return {
        filter,
        availableBooks: filteredBooks,
        availableBooksLength: filteredBooks.length,
      };
    }),
}));
