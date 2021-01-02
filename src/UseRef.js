import React from "react";

const UseRef = () => {
  // React useref allow us to store the data without re-reendering the component
  // instead of dom query selector we can also use the useref to access the dom elements
  const storeRef = React.useRef(0);

  console.log(storeRef.current);

  React.useEffect(() => {
    console.log("rendering the useEffect hooks");
    storeRef.current = storeRef.current + 1;
  });
  return (
    <>
      <h1>UseRef</h1>
      <button onClick={() => console.log("adsfsa")}>click</button>
      {storeRef.current}
    </>
  );
};

export default UseRef;
