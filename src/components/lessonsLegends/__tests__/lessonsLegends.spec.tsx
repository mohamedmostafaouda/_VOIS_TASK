import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LessonsLegends } from '../lessonsLegends';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Lessons Legends', () => {
  it('should render', () => {
    const wrapper = shallow(
      <LessonsLegends
        filteredOutput={{
          totalLessons: 0,
          campName: '',
          schoolLessons: undefined,
          schoolGraph: undefined,
        }}
        chartColors={[]}
      />,
    );
    expect(wrapper).toBeTruthy();
  });
});
