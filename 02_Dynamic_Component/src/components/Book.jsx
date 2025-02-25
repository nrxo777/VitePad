import React from "react";

const Book = (e) => {
  // console.log(e);
  return (
    <>
      <h3>
        Book Name: <span>{e.book_name}</span>
      </h3>
      <h4>
        Writer: <span>{e.writer}</span>
      </h4>
      <hr />
    </>
  );
};

export default Book;
