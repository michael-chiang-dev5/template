import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../Redux/slices/counterSlice';

export function Counter() {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  decrement;
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(33))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
