import Book from "./components/Book";
import Person from "./components/Person";

function App() {
  return (
    <>
      {/* <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
      <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
      <h2>hey planet! {parseInt(Math.random() * 100)}</h2> */}
      {/* <Person name="Naruto" age="22">
        I'm a goody goody boy
        </Person>
        <Person name="Luffy" age="19" />
        <Person name="Ichigo" age="17" />
        <Person name="Goku" age="27" /> */}
      <h1>Book List</h1>
      <hr />
      <hr />
      <Book book_name="Make Out" writer="Master Jiraya" />
      <Book book_name="Get a life" writer="Chloe Brown" />
      <Book book_name="After" writer="Anna Todd" />
    </>
  );
}

export default App;
