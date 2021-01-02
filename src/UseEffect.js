import React from "react";

const UseEffect = () => {
  // const [value, setValue] = React.useState(0);
  // const [addtwo, setAddTwo] = React.useState(0);

  const [add, setAdd] = React.useState({
    addone: 0,
    addtwo: 0
  });
  const { addone, addtwo } = add;

  React.useEffect(() => {
    console.log("rendered");
    // setAdd(prevState => ({ ...prevState, addone: 10 }));
    return () => {
      console.log("clean up");
      setAdd(prevState => ({ ...prevState, addone: 10 }));
    };
  }, [addtwo]);
  return (
    <div>
      <h1>Hooks </h1>
      <p>
        add one {addone} and add two {addtwo}
      </p>

      <button
        onClick={() =>
          setAdd(prevState => ({ ...prevState, addone: prevState.addone + 1 }))
        }
      >
        Add one
      </button>
      <button
        onClick={() =>
          setAdd(prevState => ({ ...prevState, addtwo: prevState.addtwo + 2 }))
        }
      >
        Add two
      </button>
    </div>
  );
};

export default UseEffect;
