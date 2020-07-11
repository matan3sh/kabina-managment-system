import React from 'react';

import moment from 'moment';
import 'moment/locale/he';
import Moment from 'react-moment';
import Modal from 'react-modal';

Modal.setAppElement('#root');
moment.locale('he');

const Confirm = ({ openConfirm, onCloseConfirm, movie }) => {
  return (
    <Modal
      isOpen={openConfirm}
      onRequestClose={() => onCloseConfirm()}
      className={'modal'}
      overlayClassName={'overlay'}
    >
      <div className='modal-header'>
        <h2>
          <i className='fas fa-film'></i> מחק סרט
        </h2>
        <span onClick={() => onCloseConfirm()}>X</span>
      </div>
      <div className='modal-body'>
        <p>אתה בטוח שברצונך למחוק את</p>
        <img src={movie.poster} alt='' />
        <small>
          קרדיט: {movie.credit !== 'N/A' ? movie.credit : 'לא צויין'}
        </small>
        <p>
          {movie.engName} - {movie.hebName}
        </p>
        <p className='modal-kdm'>
          <span>רישיון עד </span>{' '}
          {movie.kdm === null ? (
            'אין כרגע'
          ) : (
            <Moment format='L'>{movie.kdm}</Moment>
          )}
        </p>

        <div className='modal-footer'>
          <button className='btn'>מחק</button>
          <button className='btn btn-light' onClick={() => onCloseConfirm()}>
            ביטול
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Confirm;
