import React, { useState, useEffect } from 'react';

function Test1(props) {
  console.log('set State');
  const [s1, setS1] = useState(props.arg);

  const buttonHandler = () => {
    console.log('Button');
    let val = s1;
    val++;
    setS1(val);
  };
  useEffect(() => {
    console.log('Effect');
  });
  console.log('Render');

  return (
    <>
      {console.log('Return')}
      <div>
        <button onClick={buttonHandler}>Push</button>
      </div>
      <div>{s1}</div>
    </>
  );
}

export default Test1;
