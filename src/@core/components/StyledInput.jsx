import React from "react";
import PropTypes from "prop-types";

/**
 * Represents a styled textbox
 */
const StyledInput = ({ label, name, value, onChange }) => {
  return (
    <>
      <label htmlFor="friendlyName">{label}: </label>
      <input id={name} name={name} value={value} onChange={onChange} />
      <br />
    </>
  );
};

StyledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default StyledInput;
