import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoadingScreen } from '../loadingScreen';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Loading Screen', () => {
  it('should render', () => {
    const wrapper = shallow(<LoadingScreen />);
    expect(wrapper).toBeTruthy()
  });
});
