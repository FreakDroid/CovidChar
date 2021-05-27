import {render} from '@testing-library/react';
import Chart from '../index';

describe('Chart Component', () => {

  const props = {
    data: [],
    dataKeyBar: "cases",
    dataKeyXAxis: 'number',
    dataKeyBarSecond: 'deaths'
  }

  const component = () => render(<Chart {...props}/>);

  it('Should render the component properly', () => {
    const { baseElement } = component();
    expect(baseElement).toMatchSnapshot();
  });
});