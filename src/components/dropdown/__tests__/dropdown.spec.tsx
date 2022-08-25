import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Dropdown } from '../dropdown';
import { FilterType } from '@types';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Dropdown', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Dropdown label='test' filterName={FilterType.CAMP_FILTER} />
      </Provider>,
    );
    expect(wrapper).toBeTruthy();
  });
});
