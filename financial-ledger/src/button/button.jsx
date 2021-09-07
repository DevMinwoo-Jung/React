import React, { memo } from 'react';

const Button = memo(({name ,onClick}) => {
  return (
    <div>
        <button onClick={onClick}>
          <p>{name}</p>
        </button>
    </div>
  );
});

export default Button;