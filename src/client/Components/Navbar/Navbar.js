import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionSetField } from '../../Redux/slices/userSlice';
import { v4 as uuid } from 'uuid';

const Navbar = ({ leftItems }) => {
  // This is how you interact with Redux store with hooks
  // syntax:
  // 'user' is the name of the slice (see userSlice.js)
  // 'email' is a field in the slice
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  // On first render, get user data
  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/auth/user',
    }).then((res) => {
      if (res.data) {
        if (res.data) {
          console.log(res.data);
          // Output of console.log(res.data);
          //    { "_id": 1,
          //      "sub": "117477940901052965444",
          //      "picture": "https://lh3.googleusercontent.com/a/default-user=s96-c",
          //      "email": "michael.chiang.mc5@gmail.com",
          //      "email_verified": true}
          dispatch(actionSetField({ field: 'email', value: res.data.email }));
          dispatch(actionSetField({ field: '_id', value: res.data._id }));
        }
      }
    });
  }, []);
  return (
    <>
      <div className={styles.row}>
        <div className={`${styles.row}`}>
          {Object.entries(leftItems).map((e) => {
            const [title, url] = e;
            return (
              <div className={styles.margin} key={uuid()}>
                <Link to={url}>{title}</Link>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.margin}>
            {email ? (
              <a href="http://localhost:8080/auth/logout">logout {email}</a>
            ) : (
              <a href={`http://localhost:8080/auth/google`}>log in</a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
