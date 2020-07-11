import React from 'react';
import { connect } from 'react-redux';
import { loadMovie, clearMovie, updateMovie } from '../../store/movie/actions';

import Loader from '../shared/Loader';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Confirm from '../shared/Confirm';
import MovieUpdate from '../movie/MovieUpdate';
import moment from 'moment';
import 'moment/locale/he';
import Moment from 'react-moment';
moment.locale('he');

class MovieDetails extends React.Component {
  state = { openModal: false, openConfirm: false };

  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => {
      this.props.loadMovie(id);
    }, 1000);
  }

  componentWillUnmount() {
    this.props.clearMovie();
  }

  onClose = () => this.setState({ openModal: false });
  onOpen = () => this.setState({ openModal: true });

  onOpenConfirm = () => this.setState({ openConfirm: true });
  onCloseConfirm = () => this.setState({ openConfirm: false });

  onUpdate = (movie) => {
    this.props.updateMovie(movie);
    this.onClose();
    toast('הסרט עודכן בהצלחה', {
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
  };

  render() {
    const { movie } = this.props;
    const { openModal, openConfirm } = this.state;
    return (
      <>
        {movie === null ? (
          <Loader />
        ) : (
          <>
            <MovieUpdate
              movie={movie}
              openModal={openModal}
              onClose={this.onClose}
              onUpdate={this.onUpdate}
            />
            <Confirm
              openConfirm={openConfirm}
              onCloseConfirm={this.onCloseConfirm}
              movie={movie}
            />
            <section className='movie-details-wrapper'>
              <div className='movie-details-header'>
                <img src={movie.poster} alt='' />
                <div className='movie-details-cube'>
                  <div className='movie-details-name'>
                    <h2>{movie.engName}</h2>
                    <FaStar className='star' color={'#ffc107'} size={25} />
                    <h2>{movie.hebName}</h2>
                  </div>
                  <div className='movie-details-specs'>
                    <h4>
                      <p> רישיון </p>
                      {movie.kdm === null ? (
                        'אין כרגע'
                      ) : (
                        <Moment format='L'>{movie.kdm}</Moment>
                      )}
                    </h4>
                    <h4>
                      <p> קרדיט </p>
                      {movie.credit !== 'N/A' ? movie.credit : 'לא צויין'}
                    </h4>
                    <h4>
                      <p>שפה</p> {movie.lang}
                    </h4>
                  </div>
                  <hr />
                  <div className='movie-details-desc'>
                    <p>{movie.desc}</p>
                  </div>
                  <div className='movie-details-buttons'>
                    <button
                      className='btn btn-light'
                      onClick={this.onOpenConfirm}
                    >
                      מחק
                    </button>
                    <button className='btn'>העבר לאולם</button>
                    <button className='btn btn-light' onClick={this.onOpen}>
                      עדכן
                    </button>
                  </div>
                </div>
                <div className='movie-details-halls-wrapper'>
                  <div className='movie-details-halls'>
                    {movie.halls.map((currHall) => (
                      <div className='hall-card' key={currHall._id}>
                        <h2>אולם: {currHall.hall}</h2>
                        <hr />
                        <h4>
                          {' '}
                          <Moment format='L'>{currHall.at}</Moment>{' '}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='last-update'>
                  <h5>
                    {' '}
                    עדכון אחרון ב <Moment format='LL'>{movie.createdAt}</Moment>
                  </h5>
                </div>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie.movie
});

const mapDispatchToProps = {
  loadMovie,
  clearMovie,
  updateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
