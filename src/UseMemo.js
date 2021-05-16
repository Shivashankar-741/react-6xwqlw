import React, { useState, useMemo, useEffect } from 'react';

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log('rendering');

  const buttonOne = () => {
    console.log('count1');
    setCount1((prevCount) => prevCount + 1);
  };

  const buttonTwo = () => {
    console.log('count2');
    setCount2((prevCount) => prevCount + 1);
  };

  // const isEven = () => {
  //   console.log('memo');
  //   for (let i = 0; i < 2000000000; i++) {}
  //   return count1 % 2 === 0;
  // };

  // const isEven = useEffect(() => {
  //   console.log('memo');
  //   for (let i = 0; i < 2000000000; i++) {}
  //   return count1 % 2 === 0;
  // }, [count1]);

  // what useMemo Hook doing is : It only returns the function value when the dependency value 
  // changes, otherwise it uses the before stored cached value.

  const isEven = useMemo(() => {
    console.log('memo');
    for (let i = 0; i < 2000000000; i++) {}
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <div>
        <button onClick={buttonOne}>click {count1}</button>
        <span>{isEven ? 'even' : 'odd'}</span>
      </div>
      <div>
        <button onClick={buttonTwo}>click {count2}</button>
      </div>
    </div>
  );
};

export default UseMemo;
