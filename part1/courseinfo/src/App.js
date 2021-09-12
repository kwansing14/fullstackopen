import React from 'react';
import ComplexState from './components/complexState';

const App = (props) => {
  const course = 'Half Stack application development';

  return (
    <div>
      <div>Counter from Refresh</div>
      <p>{props.counter}</p>
      <h1>{course}</h1>
      <div>Complex State</div>
      <ComplexState />
    </div>
  );
};

export default App;
