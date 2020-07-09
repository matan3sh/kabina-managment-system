import React from 'react';
import Header from '../layout/Header';

const Messages = () => {
  return (
    <>
      <Header title={'הודעות'} icon={'fas fa-comments'} />
      <section className='messages'>
        <div className='add-message'>
          <button className='btn'>שלח</button>
          <input type='text' />
        </div>

        <div className='message-item'>
          <p>X</p>
          <p>לפני 5 שעות</p>
          <p>תקלה עם הסאונד באולם 4</p>
          <p>
            <span> Ariel</span> ע״י
          </p>
        </div>
        <div className='message-item'>
          <p>X</p>
          <p>לפני 5 שעות</p>
          <p>תקלה עם הסאונד באולם 4</p>
          <p>
            <span> Ariel</span> ע״י
          </p>
        </div>
        <div className='message-item'>
          <p>X</p>
          <p>לפני 5 שעות</p>
          <p>תקלה עם הסאונד באולם 4</p>
          <p>
            <span> Ariel</span> ע״י
          </p>
        </div>
      </section>
    </>
  );
};

export default Messages;
