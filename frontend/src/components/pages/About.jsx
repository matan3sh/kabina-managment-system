import React from 'react';
import Header from '../layout/Header';

const About = () => {
  return (
    <>
      <Header title={'אודות'} icon={'fas fa-copyright'} />
      <section className='about'>
        <h1>This App Developed By</h1>
        <h2>Matan Shaviro</h2>
        <h3>Full Stack Developer</h3>
        <div className='about-social'>
          <a
            href='https://www.linkedin.com/in/matan-shaviro-990b0272/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://www.facebook.com/matan.shaviro/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook-square'></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
