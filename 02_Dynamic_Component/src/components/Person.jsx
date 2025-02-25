const Person = (props) => {
  //   console.log(props);
  return (
    <>
      <h2>
        Name: {props.name}, Age: {props.age}
      </h2>
    </>
  );
};

export default Person;
