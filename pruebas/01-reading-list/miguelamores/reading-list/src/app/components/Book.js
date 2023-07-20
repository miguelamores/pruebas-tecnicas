import Image from "next/image";

function Book({ book, index = 0, handleClick }) {
  return (
    <>
      <figure
        className="relative rounded-xl overflow-hidden"
        onClick={() => handleClick(book, index)}
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={book.book.cover}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </figure>
      <caption className="flex mb-8 mt-2">{book.book.title}</caption>
    </>
  );
}

export default Book;
