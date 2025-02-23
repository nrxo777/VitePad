import React, { Component } from "React";
import AnotherPlanet from "./components/AnotherPlanet";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <h1>Hello Planet</h1>
//         <Person />
//         <AnotherPlanet />
//       </div>
//     </>
//   );
// }
// *** Same shit using Class Component ***

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Class bro</h1>
        <Person />
        <AnotherPlanet />
      </div>
    );
  }
}

// *** Same shit using javascript ***

//   return React.createElement(
//     "div",
//     { className: "App" },
//     React.createElement("h1", null, "Hello Planet"),
//     <Person />
//   );

const Person = () => {
  return (
    <>
      <h2>This is the planet where people eat.</h2>
    </>
  );
};

// *** Same shit using javascript ***

//   return React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "h2",
//       null,
//       "This is another planet where people shit too!"
//     )
//   );
// };

export default App;
