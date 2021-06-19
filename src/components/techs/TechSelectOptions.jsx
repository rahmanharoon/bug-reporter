import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getTechs } from "../../redux/actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((i) => (
      <option key={i.id} value={`${i.firstName} ${i.lastName}`}>
        {i.firstName} {i.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
