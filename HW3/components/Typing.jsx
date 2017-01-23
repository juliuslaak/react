import React from 'react';

export const Typing = (props) => {
  return (
    <div className="speedtyping-app--input">
      <input 
        type="text" 
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
    </div>
  );
};

Typing.propTypes = {
  inputValue: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
};