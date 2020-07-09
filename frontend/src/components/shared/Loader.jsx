import React from 'react';

const Loader = () => (
  <img
    src='https://www.psbspeakers.com/wp-content/themes/lapa-child/dealer-locator/public/spinner.gif'
    alt='Loading...'
    style={loaderStyle}
  />
);

const loaderStyle = {
  margin: ' 10rem auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Loader;
