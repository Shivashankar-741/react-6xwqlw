import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

const UseReducer = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(30000);

  // const incrementAge = () => {
  //   console.log('age');
  //   setAge(age + 1);
  // };

  // const incrementSalary = () => {
  //   console.log('salary');
  //   setSalary(salary + 1000);
  // };

  //what useCallback Hook doing is : the default nature of function will create at each time
  // the parent component rerenders. By preventing this we use useCallback hook

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age </Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default UseReducer;
