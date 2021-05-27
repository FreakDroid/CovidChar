import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Link
} from "react-router-dom";
import { internalRoutes } from '../../routes/routes';
import { getAllCovidCases, getByTimeFrame,  selectData } from '../../Slices/CovidSlice';
import Chart from '../Chart'

import './index.css'
import SelectBox from '../SelectBox';

export default function CountryData() {
  const locationInfo = useSelector(selectData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCovidCases());
  }, [dispatch])

  const onChange = (param) => {
    dispatch(getByTimeFrame(param))
  }


  return (
    <div className="row">
      <h2>Covid data from USA</h2>
      Filter data
      <SelectBox onChange={onChange} />
      <Link to={internalRoutes.state}>Check the State info</Link>
      <div className="row">
        <Chart dataKeyBar="cases" dataKeyBarSecond="deaths" dataKeyXAxis="date" data={locationInfo} />
      </div>
    </div>
  );
}
