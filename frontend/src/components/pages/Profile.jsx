import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/auth/actions';
import Header from '../layout/Header';

const Profile = ({ logout, user }) => {
  return (
    <section className='profile'>
      <Header title={'פרופיל משתמש'} icon={'fas fa-user'} />
      {user === null ? (
        'Loading'
      ) : (
        <div className='profile-card'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <div className='buttons'>
            <button className='btn btn-light'>רישום משתמש</button>
            <button className='btn' onClick={() => logout()}>
              התנתק
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
