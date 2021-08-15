import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputProps, inputLabel, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ inputProps.id }>
          {inputLabel}
          <input
            { ...inputProps }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  inputProps: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
