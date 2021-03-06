import React from 'react';
import './ButtonToggle.css';

export default function ButtonToggle(props) {
  return (
    <button className="toggle-btn" onClick={props.click}>
      <div className="toggle-btn-line"> </div>
      <div className="toggle-btn-line"></div>
      <div className="toggle-btn-line"></div>
    </button>
  )
}
