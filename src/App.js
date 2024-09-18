import React, { useState } from 'react';

const EventHandlingExample = () => {
  const [clickMessage, setClickMessage] = useState('');
  const [hoverMessage, setHoverMessage] = useState('');
  const [keyPressMessage, setKeyPressMessage] = useState('');

  const handleClick = () => {
    setClickMessage('Button clicked!');
  };

  const handleMouseEnter = () => {
    setHoverMessage('Mouse entered the text area!');
  };

  const handleKeyPress = (event) => {
    setKeyPressMessage(`Key pressed: ${event.key}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {clickMessage && <p>{clickMessage}</p>}

      <h1 onMouseEnter={handleMouseEnter}>Hover over this text</h1>
      {hoverMessage && <p>{hoverMessage}</p>}

      <input 
        type="text" 
        placeholder="Press any key" 
        onKeyPress={handleKeyPress} 
      />
      {keyPressMessage && <p>{keyPressMessage}</p>}
    </div>
  );
};

export default EventHandlingExample;