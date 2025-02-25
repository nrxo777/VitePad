import Person from "./components/Person";

function App() {
  return (
    <>
      <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
      <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
      <h2>hey planet! {parseInt(Math.random() * 100)}</h2>
      <hr />
      <Person name="Naruto" age="22">
        I'm a goody goody boy
      </Person>
      <Person name="Luffy" age="19" />
      <Person name="Ichigo" age="17" />
      <Person name="Goku" age="27" />
    </>
  );
}

export default App;
