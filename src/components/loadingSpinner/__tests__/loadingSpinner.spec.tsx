import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoadingSpinner } from '../loadingSpinner';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Loading Spinner', () => {
  it('should render', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper).toBeTruthy();
  });
});
