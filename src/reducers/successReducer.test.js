import { actionTypes } from '../actions'
import successReducer from './successReducer'

it('return default state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
})

test('return true state when receiving a action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
  expect(newState).toBe(true);
})


