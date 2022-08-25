import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Logo } from '../logo';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Logo', () => {
  it('should render', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toBeTruthy();
  });
});
