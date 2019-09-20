import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import Card from '../components/Card/Card.jsx';


describe("<Card />", () => {

  it('is rendered at application start', () => {
    let app = shallow(<Card />);
    expect(app.find('.card').exists()).toBe(true);
  });

});