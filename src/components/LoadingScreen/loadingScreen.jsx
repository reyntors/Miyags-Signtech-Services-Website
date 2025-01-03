import React from 'react';
import './loadingScreen.css';
import loading from '../../assets/miyags.png'

const LoadingScreen = () => {
  return (
    <div className="custom-loader-container">
  <div className="custom-loader"></div>
  <img src={loading} alt="" className="loadingImg" />
</div>
  );
}

export default LoadingScreen;
