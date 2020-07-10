import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../store/movie/actions';
import { toast } from 'react-toastify';

import Modal from 'react-modal';
Modal.setAppElement('#root');

class MovieAdd extends React.Component {
  state = {
    engName: '',
    hebName: '',
    lang: '',
    poster: '',
    desc: ''
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ [field]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state);
    toast('הסרט התווסף בהצלחה', {
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
    this.props.onClose();
  };

  render() {
    const { engName, hebName, lang, poster, desc } = this.state;
    const { openModal, onClose } = this.props;
    return (
      <Modal
        isOpen={openModal}
        onRequestClose={() => onClose()}
        className={'modal'}
        overlayClassName={'overlay'}
      >
        <div className='modal-header'>
          <h2>
            <i className='fas fa-film'></i> הוסף סרט
          </h2>
          <span onClick={() => onClose()}>X</span>
        </div>
        <form className='form-container movie-add' onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='שם באנגלית'
            name='engName'
            value={engName}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='שם בעברית'
            name='hebName'
            value={hebName}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='שפה'
            name='lang'
            value={lang}
            onChange={this.onChange}
          />
          <input
            type='text'
            placeholder='פוסטר'
            name='poster'
            value={poster}
            onChange={this.onChange}
          />
          <textarea
            type='text'
            rows='8'
            placeholder='תקציר'
            name='desc'
            value={desc}
            onChange={this.onChange}
          />
          <button type='submit' className='btn'>
            הוסף
          </button>
        </form>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  addMovie
};

export default connect(null, mapDispatchToProps)(MovieAdd);
