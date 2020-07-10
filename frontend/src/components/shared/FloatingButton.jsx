import React from 'react';

const FloatingButton = ({ onOpen }) => {
  return (
    <div className='floating-btn' onClick={() => onOpen()}>
      <i className='fas fa-plus'></i>
    </div>
  );
};

export default FloatingButton;
