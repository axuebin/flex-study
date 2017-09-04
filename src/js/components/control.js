import React from 'react';
import { Radio, Form } from 'antd';
import PropTypes from 'prop-types';
import '../../css/container.css';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;

export default class Control extends React.Component {
  constructor() {
    super();
    this.state = {
      formList: null,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    fetch('./src/js/data.json').then(response => response.json()).then((data) => {
      const formList = [];
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].type === 'radio') {
          const optionLenth = data[i].options.length;
          const radioList = [];
          for (let j = 0; j < optionLenth; j += 1) {
            const radio = <Radio key={j} value={data[i].options[j].value} propDesc={data[i].desc} optionDesc={data[i].options[j].desc}>{data[i].options[j].value}</Radio>;
            radioList.push(radio);
          }
          const radioGroup = <RadioGroup key={i} name={data[i].name} onChange={this.onChange}>{radioList}</RadioGroup>;
          const formItem = <FormItem key={i} label={`${data[i].label}（${data[i].options[0].value}）`}>{radioGroup}</FormItem>;
          formList.push(formItem);
        }
      }
      this.setState({ formList });
    }).catch(e => console.log(e));
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const propDesc = e.target.propDesc;
    const optionDesc = e.target.optionDesc;
    this.setState({ [name]: value });
    this.props.changeStyle(name, value, propDesc, optionDesc);
  }

  render() {
    if (this.state.formLis === null) {
      return false;
    }
    return (
      <div className="flex-control-area">
        <Form>
          {this.state.formList}
        </Form>
      </div>
    );
  }
}

Control.defaultProps = {
  changeStyle: null,
};

Control.propTypes = {
  changeStyle: PropTypes.func,
};
