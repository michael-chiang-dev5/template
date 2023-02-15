import React from 'react';
import styles from './questions.module.css';

const Card = (props) => {
  const { item } = props;

  return (
    <div className={styles.cards} key={item.primary_id}>
      <h2 className={styles.cardh}>{item.question}</h2>
      <p className={styles.cardp}>
        <input type='radio'/> 
        {item.answercorrect}
      </p>
      <p className={styles.cardp}>
        <input type='radio'/>
        {item.anwserincorrect1}
      </p>
      <p className={styles.cardp}>
        <input type='radio'/>
        {item.anwserincorrect2}
      </p>
      <p className={styles.cardp}>
        <input type='radio'/>
        {item.anwserincorrect3}
      </p>
    </div>
  );
};

export default Card;
