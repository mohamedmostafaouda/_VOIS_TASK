import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LoadingScreen } from '../loadingScreen';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Loading Screen', () => {
  it('should render', () => {
    const wrapper = shallow(<LoadingScreen />);
    expect(wrapper).toBeTruthy();
  });
});
