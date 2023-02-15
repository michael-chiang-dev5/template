import React, { useState } from 'react';

import axios from 'axios';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Systems Design Practice</h1>
      <div>
        {/* <img src="./assets/systemsdesign.png" alt="systems design" /> */}
      </div>
    </div>
  );
};

export default Home;
