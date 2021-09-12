import React, { useState } from 'react';

const ComplexState = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () =>
    setClicks({ ...clicks, left: clicks.right + 1 });

  return (
    <div>
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      <div>
        {clicks.left}, {clicks.right}
      </div>
    </div>
  );
};

export default ComplexState;
