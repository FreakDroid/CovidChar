import {render} from '@testing-library/react';
import SelectBox from '../index';

describe('Chart Component', () => {

  const props = {
    onChange: () => {}
  }

  const component = () => render(<SelectBox {...props}/>);

  it('Should render the component properly', () => {
    const { baseElement } = component();
    expect(baseElement).toMatchSnapshot();
  });
});
