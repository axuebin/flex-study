import React from 'react';
import PropTypes from 'prop-types';
import '../../css/container.css';

export default class Desc extends React.Component {
  render() {
    return (
      <div className="flex-desc-area">
        <div className="flex-desc-prop">
          <h3>属性</h3>{this.props.propDesc}
        </div>
        <div className="flex-desc-option">
          <h3>取值</h3>{this.props.optionDesc}
        </div>
      </div>
    );
  }
}

Desc.defaultProps = {
  propDesc: ' ',
  optionDesc: ' ',
};

Desc.propTypes = {
  propDesc: PropTypes.string,
  optionDesc: PropTypes.string,
};
