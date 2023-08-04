import React from 'react';
import '../App'; 

const Card = ({ title, image, description, characters }) => {
  function prnt(description, characters) {
    console.log(`Description: ${description}`);
    console.log(`Characters: ${Object.values(characters).join(', ')}`);
  }

  return (
    <div className='card'>
      <h1 className='card-title'>{title}</h1>
      <div className='img-box'>
        <img src={image} alt={title} />
      </div>
      <button onClick={() => prnt(description, characters)} className='btn'>
        Details
      </button>
    </div>
  );
};

export default Card;
