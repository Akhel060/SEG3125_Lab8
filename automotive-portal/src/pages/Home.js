import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to RevHeads</h1>
      <p className="introduction">
        Your ultimate destination for in-depth car reviews, the latest automotive news, and a vibrant community forum.
      </p>
      <div className="features">
        <div className="feature">
          <h2>Car Reviews</h2>
          <p>Get the latest insights and detailed analyses of the newest car models on the market.</p>
          <Link to="/car-reviews" className="link">Explore Car Reviews</Link>
        </div>
        <div className="feature">
          <h2>Automotive News</h2>
          <p>Stay up-to-date with the latest news in the automotive industry, including innovations, car shows, and regulatory changes.</p>
          <Link to="/automotive-news" className="link">Read Automotive News</Link>
        </div>
        <div className="feature">
          <h2>Community Forum</h2>
          <p>Join the discussion with fellow automotive enthusiasts. Share experiences, advice, and engage in discussions on various automotive topics.</p>
          <Link to="/community-forum" className="link">Visit the Forum</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;