import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
        <h1 className="m-0"><img alt="asd logo" src="puzzle_logo.png" width="40px"/>ASD Blog</h1>
        <div className="card-header flex-row justify-space-between-md justify-flex-start">
        <button className="m-1"><a href="*">Home</a></button>
        <button className="m-1"><a href="*">Calendar</a></button>
        <button className="m-1"><a href="*">Routines</a></button>
        <button className="m-1"><a href="*">Rewards</a></button>
        <button className="m-1"><a href="*">About</a></button>
        </div>
      <p className="m-0">What's on your mind?</p>
      </div>
    </header>
  );
};

export default Header;
