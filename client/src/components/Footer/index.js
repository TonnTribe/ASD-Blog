import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-primary p-4">
      <div className="container text-center mb-5">
      {location.pathname !== "/" && (
        <button className="btn btn-primary mb-3" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16"> <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg> Go Back
        </button>
      )}
        <h4>
          Made to understand{" "}
          <span
            className="emoji"
            role="img"
            aria-label="puzzle"
            aria-hidden="false"
          >
            <img alt="asd logo" src="puzzle.gif" width="25px" />
          </span>{" "}
          by ASD Nudge team.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
