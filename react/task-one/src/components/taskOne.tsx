import React from 'react';

/**
*  Returns all even numbers from an input array
* @param name
* @return string
*/
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <h1>Hello, {name} !</h1>
  );
};

export default Greeting;
