import {
  Link
} from "react-router-dom";
import {Select} from 'antd';
import {internalRoutes} from '../../routes/routes';
import Chart from '../Chart';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllStateCovidCases, setDate, selectData} from '../../Slices/CovidStateSlice';
import {states} from './states'
import './index.css'
import SelectBox from '../SelectBox';


export default function StateData() {
  const { Option } = Select;
  const locationInfo = useSelector(selectData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStateCovidCases());
  }, [dispatch])

  const onChange = (param) => {
    dispatch(getAllStateCovidCases(param))
  }

  const onChangeDate =(param) => {
    dispatch(setDate(param))
  }

  return (
      <div className="row">
        <h2>Covid data from USA</h2>
        <div>
          <span className="space">Filter data by state</span>
          <Select defaultValue="Alabama" style={{ width: 120 }} onChange={onChange}>
            {states.map(value => <Option value={value.name} key={value.name}>{value.name}</Option>)}
          </Select>
          <span className="space">Select Date Range</span>
          <SelectBox onChange={onChangeDate} />
        </div>
        <Link to={internalRoutes.root}>Check the State info</Link>
        <div className="row">
          <Chart dataKeyBar="cases" dataKeyBarSecond="deaths" dataKeyXAxis="date" data={locationInfo} />
        </div>
      </div>
  )
}
