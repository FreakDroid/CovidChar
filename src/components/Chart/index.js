import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';


export default function Chart({data, dataKeyXAxis, dataKeyBar, dataKeyBarSecond}) {
  return (
    <BarChart
      width={1300}
      height={700}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 40,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKeyXAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKeyBar} fill="#8884d8" />
      <Bar dataKey={dataKeyBarSecond} fill="#82ca9d" />
    </BarChart>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  dataKeyXAxis: PropTypes.string,
  dataKeyBar: PropTypes.string,
  dataKeyBarSecond: PropTypes.string
}