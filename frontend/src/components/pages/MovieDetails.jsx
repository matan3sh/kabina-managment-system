import React from 'react';
import { FaStar } from 'react-icons/fa';

const MovieDetails = () => {
  return (
    <section className='movie-details-wrapper'>
      <div className='movie-details-header'>
        <img
          src='https://i.ebayimg.com/images/g/k2kAAOSwCZZcyIhd/s-l1600.jpg'
          alt=''
        />
        <div className='movie-details-cube'>
          <div className='movie-details-name'>
            <h2>Sonic</h2>
            <div>
              <span>5/10</span>
              <FaStar className='star' color={'#ffc107'} size={25} />
            </div>
            <h2>סוניק</h2>
          </div>
          <div className='movie-details-specs'>
            <h4>
              04/08 <span>:רישיון</span>
            </h4>
            <h4>
              <span>קרדיט:</span> 04:00
            </h4>
            <h4>
              <span>שפה:</span> אנגלית
            </h4>
          </div>
          <hr />
          <div className='movie-details-desc'>
            <p>
              לאחר שהוענק לו כוח מדהים שלא לגמרי מובן לו, סוניק נשלח למחבוא
              בכדור הארץ וניתן לו חוק אחד: בשום אופן אל תיתן לעולם לדעת שאתה
              קיים. אך זו לא משימה פשוטה עבור נער בן 15 – במיוחד עם גישה ויכולות
              כשל סוניק. במהרה הוא מתגלה ע"י טום – שוטר סרקסטי מעיירה קטנה ועם
              לב גדול. יחד הם יוצאים להרפתקה, כשבעקבותיהם ד"ר רובוטניק המטורף
              ויצירותיו המכאניות.
            </p>
          </div>
          <div className='movie-details-buttons'>
            <button className='btn btn-light'>מחק</button>
            <button className='btn'>העבר לאולם</button>
            <button className='btn btn-light'>עדכן</button>
          </div>
        </div>
        <div className='movie-details-halls-wrapper'>
          <div className='movie-details-halls'>
            <div className='hall-card'>
              <h2>אולם 1</h2>
              <hr />
              <h4>02/07/20</h4>
            </div>
            <div className='hall-card'>
              <h2>אולם 4</h2>
              <hr />
              <h4>02/07/20</h4>
            </div>
            <div className='hall-card'>
              <h2>אולם 15</h2>
              <hr />
              <h4>02/07/20</h4>
            </div>
          </div>
        </div>
        <div className='last-update'>
          <h5>עדכון אחרון 21/06/2020</h5>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
