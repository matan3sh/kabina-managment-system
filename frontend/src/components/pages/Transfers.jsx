import React, { Component } from 'react';
import Header from '../layout/Header';

class Transfers extends Component {
  render() {
    return (
      <section className='transfers'>
        <Header title={'העברות סרטים'} icon={'fas fa-file-export'} />
        <table className='content-table'>
          <thead>
            <tr>
              <th>לאולם</th>
              <th>מאולם</th>
              <th>משתמש</th>
              <th>סרט</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='active-hall'>2</td>
              <td>4</td>
              <td>Max L</td>
              <td className='active-hall right movie-name'>
                ההתחלה <input type='checkbox' />
                <p className='time'>לפני שעתיים</p>
              </td>
            </tr>
            <tr>
              <td className='active-hall'>15</td>
              <td>10</td>
              <td>Ariel</td>
              <td className='active-hall right movie-name'>
                סוניק <input type='checkbox' />
                <p className='time'>לפני ארבע שעות</p>
              </td>
            </tr>
            <tr>
              <td className='active-hall'>8</td>
              <td>22</td>
              <td>Tal</td>
              <td className='active-hall right movie-name'>
                בלאדשוט <input type='checkbox' />
                <p className='time'>לפני עשר שעות</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className='completed-title'>
          <i className='fas fa-check-circle'></i> סרטים שהועברו
        </h3>
        <table className='content-table'>
          <thead>
            <tr>
              <th>לאולם</th>
              <th>מאולם</th>
              <th>משתמש</th>
              <th>סרט</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='active-hall'>2</td>
              <td>4</td>
              <td>Max L</td>
              <td className='active-hall right'>
                טנט <span>X</span>
              </td>
            </tr>
            <tr>
              <td className='active-hall'>15</td>
              <td>10</td>
              <td>Ariel</td>
              <td className='active-hall right'>
                סקובי דו <span>X</span>
              </td>
            </tr>
            <tr>
              <td className='active-hall'>8</td>
              <td>22</td>
              <td>Tal</td>
              <td className='active-hall right'>
                המשלוח <span>X</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Transfers;
