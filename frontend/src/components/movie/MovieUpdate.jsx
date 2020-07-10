import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

class MovieUpdate extends React.Component {
  state = {
    engName: this.props.movie.engName,
    hebName: this.props.movie.hebName,
    lang: this.props.movie.lang,
    poster: this.props.movie.poster,
    kdm: this.props.movie.kdm,
    credit: this.props.movie.credit,
    desc: this.props.movie.desc
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ [field]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { engName, hebName, lang, poster, kdm, credit, desc } = this.state;
    const updatedMovie = {
      _id: this.props.movie._id,
      credit,
      kdm,
      engName,
      hebName,
      lang,
      desc,
      poster,
      user: this.props.movie.user,
      createdAt: Date.now
    };
    this.props.onUpdate(updatedMovie);
  };

  render() {
    const { engName, hebName, lang, poster, kdm, credit, desc } = this.state;
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
            <i className='fas fa-film'></i> עדכן סרט
          </h2>
          <span onClick={() => onClose()}>X</span>
        </div>
        <form className='form-container movie-update' onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='שם באנגלית'
            name='engName'
            value={engName}
            onChange={this.onChange}
            required
          />
          <input
            type='text'
            placeholder='שם בעברית'
            name='hebName'
            value={hebName}
            onChange={this.onChange}
            required
          />
          <input
            type='text'
            placeholder='שפה'
            name='lang'
            value={lang}
            onChange={this.onChange}
            required
          />
          <input
            type='text'
            placeholder='פוסטר'
            name='poster'
            value={poster}
            onChange={this.onChange}
            required
          />
          <input
            type='date'
            placeholder='רישיון'
            name='kdm'
            value={kdm === null ? '' : kdm}
            onChange={this.onChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
          <input
            type='time'
            placeholder='קרדיט'
            name='credit'
            value={credit}
            onChange={this.onChange}
            required
          />
          <textarea
            type='text'
            rows='8'
            placeholder='תקציר'
            name='desc'
            value={desc}
            onChange={this.onChange}
            required
          />
          <button type='submit' className='btn'>
            שמור
          </button>
        </form>
      </Modal>
    );
  }
}
export default MovieUpdate;
