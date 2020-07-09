import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUser } from '../../store/auth/actions';

import Navbar from '../layout/Navbar';

class Home extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <>
        <Navbar />
        <Link to='/movie'>
          <div className='home-wrapper'>
            <div className='home-card'>
              <img
                src='https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1581522827/user-1046066/submissions/lvlliezbztnftlm48thp.jpg'
                alt=''
              />
              <h2>Bloodshot</h2>
              <h2>בלאדשוט</h2>
              <h3>קרדיט: 04:00</h3>
            </div>
            <div className='home-card'>
              <img
                src='https://i.ebayimg.com/images/g/k2kAAOSwCZZcyIhd/s-l1600.jpg'
                alt=''
              />
              <h2>Sonic</h2>
              <h2>סוניק</h2>
              <h3>קרדיט: 04:00</h3>
            </div>
            <div className='home-card'>
              <img
                src='https://assets.mycast.io/posters/inception-2020-fan-casting-poster-41152-large.jpg?1591501576'
                alt=''
              />
              <h2>Inception</h2>
              <h2>ההתחלה</h2>
              <h3>קרדיט: 04:00</h3>
            </div>
            <div className='home-card'>
              <img
                src='https://wehaveahulk.co.uk/wp-content/uploads/2019/10/THE_COURIER_UK_ONE_SHEET.jpg'
                alt=''
              />
              <h2>The Courier</h2>
              <h2>המשלוח</h2>
              <h3>קרדיט: 04:00</h3>
            </div>
            <div className='home-card'>
              <img
                src='https://images-na.ssl-images-amazon.com/images/I/71Tw-XHzu1L._AC_SY741_.jpg'
                alt=''
              />
              <h2>Tenet</h2>
              <h2>טנט</h2>
              <h3>קרדיט: 04:00</h3>
            </div>
            <div className='home-card'>
              <img
                src='https://www.joblo.com/assets/images/joblo/posters/2020/03/1.jpg'
                alt=''
              />
              <h2>Scoob</h2>
              <h2>סקובי-דו</h2>
              <h3>קרדיט: 04:00</h3>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
