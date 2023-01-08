import React from "react";
import PropTypes from "prop-types"; //This is to specify the type of props we want to get from our component
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "primary" ? "black" : "white"
              }`}
            >
              <div className="container my-3">
                <input
                  className="form-check-input"
                  onClick={props.toggleMode}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-labe"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable dark mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

//Proptypes are used to avoid any error while we set props in a component, so it is possible to set the title for example a number instead of a string, so to keep ourselves away from errors and mistakes we use this
Navbar.propTypes = {
  //Component.propTypes
  title: PropTypes.string.isRequired, // Now we have to send a prop of type string only thru title otherwise it will give an error. Also isRequired makes sure u donnot miss it
  aboutText: PropTypes.string.isRequired,
};

//defaultprops are used to set the default values
Navbar.defaultProps = {
  //Component.defaultProps
  title: "Set title here",
  aboutText: "About text here",
};
export default Navbar;
