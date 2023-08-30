import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
        <h1 className="m-0"><img alt="asd logo" src="puzzle_logo.png" classname=""/>ASD Blog</h1>
        <p className="m-0">What's on your mind?</p>
      </div>
    </header>
  );
};

export default Header;
