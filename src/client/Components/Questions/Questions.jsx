import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import axios from 'axios';
import { setQuestions } from '../../Redux/slices/questionSlice';
import styles from './questions.module.css';

const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  useEffect(() => {
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/api/questions',
    })
      .then((res) => {
        if (res.data) {
          dispatch(setQuestions(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const questionCard = questions.map((item) => <Card item={item} />);

  return (
    <div className={styles.qcontainer}>
      <h2 className={styles.mainh}>Multiple Choice Questions</h2>
      <div className={styles.cardcontainer}>
        {questionCard}
      </div>
      
    </div>
  );
};

export default Questions;
