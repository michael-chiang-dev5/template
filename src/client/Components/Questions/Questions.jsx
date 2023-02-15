import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { setQuestions } from '../../Redux/slices/questionSlice';
import styles from './questions.module.css';

const Questions = () => {

  const questions = useSelector((state) => state.questions.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/api/questions'
    }).then((res) => {
      console.log(res)
      if(res.data) {
        console.log(res.data);
        dispatch(setQuestions({ questions: res.data }))
      }
    }).catch(err => {

    })
  }, [])
  // console.log(questions)

  return <div>Questions</div>;
};

export default Questions;
