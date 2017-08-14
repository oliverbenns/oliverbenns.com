import React from 'react';

import whiteFrameSrc from './img/iphone-white.png';
import blackFrameSrc from './img/iphone-black.png';
import styles from './styles.module.css';

const Iphone = ({ children, invert }) => (
  <div className={styles.container}>
    <div className={styles.iphone}>
      <img src={invert ? blackFrameSrc : whiteFrameSrc} alt="iPhone Frame" role="presentation" />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
);

export default Iphone;
