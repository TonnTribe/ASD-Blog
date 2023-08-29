import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-primary p-4">
      <div className="container text-center mb-5">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="puzzle"
            aria-hidden="false"
          >
            🧩
          </span>{' '}
          by ASD Nudge team.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
