import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header'
import {shallow} from 'enzyme'
import { wrap } from 'module';
import toJson from 'enzyme-to-json'
test('should render Header correctly',()=>{
const wrapper =shallow(<Header/>)
expect(wrapper).toMatchSnapshot();
//expect(wrapper.find('h1').length).toBe('Expensify')
    //   const renderer=new ReactShallowRenderer();
//   renderer.render(<Header/>)
//   expect(renderer.getRenderOutput()).toMatchSnapshot();

})