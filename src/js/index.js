import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import './../css/index.css';

export default class Index extends React.Component {
  render() {
    return (
      <Container />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('example'));
