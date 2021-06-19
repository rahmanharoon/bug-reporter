import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { editBug } from "../../../redux/actions/bugActions";
import TechSelectOptions from "../../techs/TechSelectOptions";

const EditBugModal = ({ current, editBug }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setTech(current.tech);
      setMessage(current.message);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter the bug and assign to a tech" });
    } else {
      const updateBug = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      editBug(updateBug);
      M.toast({ html: "Bug updated" });
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Bug</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Assign to
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention!</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-green btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditBugModal.protoTypes = {
  current: PropTypes.object,
  editBug: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.bug.current,
});

export default connect(mapStateToProps, { editBug })(EditBugModal);
