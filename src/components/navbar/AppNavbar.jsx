import PropTypes from "prop-types";
import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchBugs } from "../../redux/actions/bugActions";

const AppNavbar = ({ searchBugs }) => {
  const textRef = useRef("");
  const onSearchChange = (e) => {
    searchBugs(textRef.current.value);
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              required
              ref={textRef}
              placeholder="Search Bugs"
              onChange={onSearchChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

AppNavbar.propTypes = {
  searchBugs: PropTypes.func.isRequired,
};

export default connect(null, { searchBugs })(AppNavbar);
