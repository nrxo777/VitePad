import React, { useState } from "react";
import Book from "./components/Book";

let bn = document.querySelector("#bn");

function App() {
  const [books, setBooks] = useState([
    { book_name: "Make Out", writer: "Master Jiraya" },
    { book_name: "Get a life", writer: "Chloe Brown" },
    { book_name: "After", writer: "Anna Todd" },
  ]);

  const changeName = (e) => {
    const updatedBooks = [...books];
    updatedBooks[0].book_name = e.target.value;
    setBooks(updatedBooks);
  };

  const changeWriter = (e) => {
    const updatewriter = [...books];
    updatewriter[0].writer = e.target.value;
    setBooks(updatewriter);
  };

  const submit = (e) => {
    console.log(bn.value);
  };

  return (
    <>
      <div>
        {/* <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
        <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
        <h2>hey planet! {parseInt(Math.random() * 100)}</h2> */}
        {/* <Person name="Naruto" age="22">
          I'm a goody goody boy
        </Person>
        <Person name="Luffy" age="19" />
        <Person name="Ichigo" age="17" />
        <Person name="Goku" age="27" /> */}
      </div>

      <h1>Book List</h1>
      <hr />
      <form action="">
        <input type="text" placeholder="Book Name" onChange={changeName} />
        <input type="text" placeholder="Writer Name" onChange={changeWriter} />
        <input type="submit" name="Submit" onChange={submit} />
      </form>

      <hr />
      {books.map((book, index) => (
        <Book key={index} book_name={book.book_name} writer={book.writer} />
      ))}
    </>
  );
}

export default App;
