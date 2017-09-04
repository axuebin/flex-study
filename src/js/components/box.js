import React from 'react';
import PropTypes from 'prop-types';
import '../../css/container.css';

export default class Box extends React.Component {
  render() {
    return (
      <div className="box">{this.props.number}</div>
    );
  }
}

Box.defaultProps = {
  number: 1,
};

Box.propTypes = {
  number: PropTypes.number,
};
