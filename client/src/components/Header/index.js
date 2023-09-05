import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
        <h1 className="m-0"><img alt="asd logo" src="puzzle_logo.png" width="40px"/> ASD Blog</h1>
        <div className="card-header flex-row justify-space-between-md justify-flex-start">
        <button className="m-1"><a href="*">Home</a></button>
        <button className="m-1"><a href="*">Blog</a></button>
        <button className="m-1"><a href="*">Calendar</a></button>
        <button className="m-1"><a href="*">Routines</a></button>
        <button className="m-1"><a href="*">Rewards</a></button>
        <button className="m-1"><a href="*">About</a></button>
        </div>
      <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
