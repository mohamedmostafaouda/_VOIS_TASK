import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ChartContainer } from '../chartContainer';
import { store } from '@redux/store';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Chart Container', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ChartContainer />
      </Provider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
