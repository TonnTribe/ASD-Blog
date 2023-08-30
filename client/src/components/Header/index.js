import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
        <h1 className="m-0"><img alt="asd logo" src="puzzle_logo.png" width="40px"/>ASD Blog</h1>
        <div className="card-header flex-row justify-space-between-md justify-flex-start">
        <p className="m-1"><a href="*">Home</a></p>
        <p className="m-1"><a href="*">Calendar</a></p>
        <p className="m-1"><a href="*">Routines</a></p>
        <p className="m-1"><a href="*">Rewards</a></p>
        <p className="m-1"><a href="*">About</a></p>
        </div>
      <p className="m-0">What's on your mind?</p>
      </div>
    </header>
  );
};

export default Header;
