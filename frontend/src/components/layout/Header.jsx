import React from 'react';

const Header = ({ title, icon }) => {
  return (
    <div className='header'>
      <h1 className='logo'>
        <span>K</span>MS
      </h1>
      <h1 className='title'>
        <i className={icon}></i> {title}
      </h1>
    </div>
  );
};

export default Header;
