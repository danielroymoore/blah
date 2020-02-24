import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const TextInput = ({
  type,
  label,
  name,
  value,
  id,
  disabled,
  onChange,
  onBlur
}) => (
  <div className="form-input__text-input">
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      onChange={e => onChange(e)}
      onBlur={onBlur ? e => onBlur(e) : null}
      autoComplete="off"
    />
    <div className="form-input__text-input__ripple"></div>
    <label>{label}</label>
  </div>
);

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};


export { CheckBox, CheckBoxGroup, TextInput, Select, DateInput };
