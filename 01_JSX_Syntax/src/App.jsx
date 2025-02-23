import React from "React";

function App() {
  // return (
  //   <>
  //     <div className="App">
  //       <h1>Hello Planet</h1>
  //       <Person />
  //     </div>
  //   </>
  // );

  // *** Same shit using javascript ***

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Hello Planet"),
    <Person />
  );
}

const Person = () => {
  //   return (
  //     <>
  //       <h2>This is the planet where people eat.</h2>
  //     </>
  //   );
  // };

  // *** Same shit using javascript ***

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "This is another planet where people shit too!"
    )
  );
};

export default App;
