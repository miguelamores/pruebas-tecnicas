import { useStore } from "../store";
import Image from "next/image";
import Book from "./Book";

const LectureList = () => {
  const lectureList = useStore((state) => state.lectureList);
  const lectureListLength = useStore((state) => state.lectureListLength);
  const removeFromLectureList = useStore(
    (state) => state.removeFromLectureList
  );

  console.log({ lectureList });

  return (
    <div className="z-10 w-full max-w-5xl items-center flex flex-col justify-start font-mono text-sm lg:flex border-2 ml-4 bg-gray-300 p-2">
      <p className="text-center text-base text-slate-900 mb-4 ">
        You have <b>{lectureListLength}</b> books in your reading list
      </p>
      <ul>
        {lectureList.length > 0 &&
          lectureList.map((book) => (
            <li className="flex flex-col w-[180px]" key={book.book.ISBN}>
              <Book
                book={book}
                //   index={index}
                handleClick={removeFromLectureList}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LectureList;
