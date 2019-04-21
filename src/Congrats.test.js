import React from 'react'
import Congrats from './Congrats'
import { shallow } from "enzyme"
import { checkProps, findByTestAttr } from "../test/testUtils"

const defaultProps = { success: false }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

it('renders without errors', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'components-congrats')
  expect(component.length).toBe(1)
})

it('renders no text when `success` props is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'components-congrats')
  expect(component.text()).toBe('')
})

it('renders non-empty congrats message when `success` props is true', () => {
  const wrapper = setup({ success: true })
  const component = findByTestAttr(wrapper, 'congrats-message')
  expect(component.text().length).not.toBe(0)
})

it('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Congrats, expectedProps);
})




