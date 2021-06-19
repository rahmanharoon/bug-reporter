import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { deleteBug, setCurrentBug } from "../../redux/actions/bugActions";

const BugItem = ({ bug, deleteBug, setCurrentBug }) => {
  const { id, attention, message, tech, date } = bug;
  const onDelete = () => {
    deleteBug(id);
    M.toast({ html: `Deleted bug #${id} by ${tech}` });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}
          `}
          onClick={() => setCurrentBug(bug)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span>
          Bug assigned to <span className="black-text">{tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

BugItem.propTypes = {
  bug: PropTypes.object.isRequired,
  deleteBug: PropTypes.func.isRequired,
  setCurrentBug: PropTypes.func.isRequired,
};

export default connect(null, { deleteBug, setCurrentBug })(BugItem);
