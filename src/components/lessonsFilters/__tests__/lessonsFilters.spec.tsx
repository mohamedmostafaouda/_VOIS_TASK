import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LessonsFilters } from '../lessonsFilters';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Lessons Filters', () => {
  it('should render', () => {
    const wrapper = shallow(<LessonsFilters />);
    expect(wrapper).toBeTruthy();
  });
});
