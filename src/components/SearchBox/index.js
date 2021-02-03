
import React from 'react';

const SearchBox = ({styleName, placeholder, onChange, value, onKeyDown, name, onFocus, onBlur}) => {

  return (
    <div className={`search-bar right-side-icon bg-transparent ${styleName}`}>
      <div className="form-group">
        <input className="form-control border-0" type="search" placeholder={placeholder} onChange={onChange}
              name={name} value={value} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur}/>
      </div>
    </div>
  )
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
  name: ""
};