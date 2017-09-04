import React from 'react';
import { Row, Col, Button } from 'antd';
import Box from './box';
import Control from './control';
import Desc from './desc';
import '../../css/container.css';

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      propDesc: ' ',
      optionDesc: ' ',
      style: {
        display: 'flex',
      },
      boxNum: [1, 2, 3, 4],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  handleChange(name, value, propDesc, optionDesc) {
    const oldStyle = this.state.style;
    const newStyle = Object.assign({ }, oldStyle, { [name]: value });
    this.setState({ propDesc, optionDesc, style: newStyle });
  }

  addBox() {
    const boxNum = this.state.boxNum;
    boxNum.push(boxNum.length + 1);
    this.setState({ boxNum });
  }

  deleteBox() {
    const boxNum = this.state.boxNum;
    boxNum.splice(boxNum.length - 1, 1);
    this.setState({ boxNum });
  }

  render() {
    const boxList = this.state.boxNum.map(item => <Box key={item} number={item} />);
    return (
      <div className="container">
        <div className="flex-box-control">
          <Button type="primary" size="large" onClick={this.addBox}>添加一个Box</Button>
          <Button type="danger" size="large" onClick={this.deleteBox}>删除一个Box</Button>
        </div>
        <Row>
          <Col span={12}>
            <div className="flex-box-area" style={this.state.style}>
              {boxList}
            </div>
          </Col>
          <Col span={6}><Control data={this.state.data} changeStyle={this.handleChange} /></Col>
          <Col span={6}><Desc propDesc={this.state.propDesc} optionDesc={this.state.optionDesc} /></Col>
        </Row>
      </div>
    );
  }
}
