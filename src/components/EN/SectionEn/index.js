import React from 'react';
import { Link } from 'react-router-dom';

import btnEn from '../../../img/button-en.webp';

export default () => (
  <div className="section-home en">
    <div>
      <p className="text">EN</p>
      <h2 className="title">Not sure about the size?</h2>
      <p className="text">No worries, we'll help you!</p>
      <Link to="/selection/en">
        <button className="btn">
          <img src={btnEn} alt="Click here" width='300px' />
        </button>
      </Link>
    </div>
  </div>
);