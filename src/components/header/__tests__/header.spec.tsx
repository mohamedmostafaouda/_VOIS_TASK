import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Header } from '../header';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Header', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });
});
