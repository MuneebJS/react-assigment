
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({placeholder, onChange, value, onKeyDown, name, onFocus, onBlur}) => {

  return (
      <div className="form-group">
        <input className="form-control" type="search" placeholder={placeholder} onChange={onChange}
              name={name} value={value} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur}/>
      </div>
  )
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onKeyDown: PropTypes.func,
  name: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default InputField;