import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

import { storeFactory } from "../test/testUtils"

const setup = (state = {}) => {
  const store = storeFactory(state)
  return shallow(<App store={store}/>).dive().dive();
};

it('has access to `success` state', () => {
  const wrapper = setup({success: true});
  expect(wrapper.instance().props.success).toBe(true);
})



