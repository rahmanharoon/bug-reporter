import BugItem from "./BugItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import PreLoader from "../loader/PreLoader";
import { getBugs } from "../../redux/actions/bugActions";

const Bugs = ({ bug: { bugs, loading }, getBugs }) => {
  useEffect(() => {
    getBugs();
    //eslint-disable-next-line
  }, []);

  if (loading || bugs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Reported Bugs</h4>
      </li>
      {!loading && bugs.length === 0 ? (
        <p className="center">No Bugs to show</p>
      ) : (
        bugs.map((bug) => <BugItem bug={bug} key={bug.id} />)
      )}
    </ul>
  );
};

Bugs.propTypes = {
  bug: PropTypes.object.isRequired,
  getBugs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bug: state.bug,
});

export default connect(mapStateToProps, { getBugs })(Bugs);
