import React from 'react';

/**
*  Returns names into cards
* @param names
* @return string
*/
interface DisplaynameProps {
  names: string[];
  name: string;
  index: number;

}

const Displayname: React.FC<DisplaynameProps> = ({ names }) => {
  return (
    <div className="card-container">
        {names.map((name, index) => (
          <div className="card" key={index}>
            <h2>{name}</h2>
          </div>
        ))}
      </div>
  );
};

export default Displayname;