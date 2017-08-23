import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

test('App renders without exploding', () => {
    const wrapper = shallow(
        <App msg={['A', 'B', 'C']} />
      );
    
    var sectionWrapper = wrapper.find('section');
    expect(sectionWrapper).not.toBeNull();

    var divWrapper = sectionWrapper.find('div');
    expect(divWrapper.length).toBe(3);
})