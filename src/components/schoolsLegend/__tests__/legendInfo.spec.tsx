import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LegendInfo } from '../legendInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Legend Info', () => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
  }));
  it('should render', () => {
    const wrapper = shallow(<LegendInfo number={12} placeName={'Egypt'} />);
    expect(wrapper.find('Egypt')).toBeTruthy();
  });
});
