import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../store/auth/actions';
import { NavLink } from 'react-router-dom';

const Navbottom = ({ loadUser, isAuthenticated }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const guestLinks = (
    <>
      <NavLink
        to='/'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>home</i>
        <span className='bottom-nav-text'>דף ראשי</span>
      </NavLink>

      <NavLink
        to='/login'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>login</i>
        <span className='bottom-nav-text'>התחבר</span>
      </NavLink>

      <NavLink
        to='/about'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>supervised_user_circle</i>
        <span className='bottom-nav-text'>אודות</span>
      </NavLink>
    </>
  );

  return (
    <div className='bottom-nav'>
      {isAuthenticated === null || !isAuthenticated ? (
        guestLinks
      ) : (
        <>
          <NavLink
            to='/'
            exact
            className='bottom-nav-link'
            activeClassName='bottom-nav-link-active'
          >
            <i className='material-icons bottom-nav-icon'>home</i>
            <span className='bottom-nav-text'>ראשי</span>
          </NavLink>
          <NavLink
            to='/transfers'
            exact
            className='bottom-nav-link'
            activeClassName='bottom-nav-link-active'
          >
            <i className='material-icons bottom-nav-icon'>settings</i>
            <span className='bottom-nav-text'>העברות</span>
          </NavLink>
          <NavLink
            to='/messages'
            exact
            className='bottom-nav-link'
            activeClassName='bottom-nav-link-active'
          >
            <i className='material-icons bottom-nav-icon'>message</i>
            <span className='bottom-nav-text'>הודעות</span>
          </NavLink>
          <NavLink
            to='/profile'
            exact
            className='bottom-nav-link'
            activeClassName='bottom-nav-link-active'
          >
            <i className='material-icons bottom-nav-icon'>account_circle</i>
            <span className='bottom-nav-text'>פרופיל</span>
          </NavLink>
          <NavLink
            to='/about'
            exact
            className='bottom-nav-link'
            activeClassName='bottom-nav-link-active'
          >
            <i className='material-icons bottom-nav-icon'>
              supervised_user_circle
            </i>
            <span className='bottom-nav-text'>אודות</span>
          </NavLink>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbottom);
