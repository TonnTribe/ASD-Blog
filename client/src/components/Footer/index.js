import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-primary p-4">
      <div className="container text-center mb-5">
        <h4>
        Made to understand{' '}
          <span
            className="emoji"
            role="img"
            aria-label="puzzle"
            aria-hidden="false"
          >
          <img alt="asd logo" src="puzzle.gif" width="25px"/>
          </span>{' '}
          by ASD Nudge team.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
