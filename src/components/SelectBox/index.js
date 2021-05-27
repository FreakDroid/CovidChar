import {Select} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../Chart';


export default function SelectBox({onChange}) {
  const { Option } = Select;
  return (
    <Select defaultValue="0" style={{ width: 120 }} onChange={onChange}>
      <Option value="1">Today</Option>
      <Option value="7">Last 7 days</Option>
      <Option value="31">Last Months</Option>
      <Option value="0">All the time</Option>
    </Select>
  )
}

Chart.propTypes = {
  onChange: PropTypes.func.isRequired,
}