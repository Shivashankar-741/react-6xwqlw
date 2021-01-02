import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  // React useref allow us to store the data without re-reendering the component
  // instead of dom query selector we can also use the useref to access the dom elements

  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>{name}</p>
      <p>render{renderCount.current}</p>
    </>
  );
};

export default UseRef;
