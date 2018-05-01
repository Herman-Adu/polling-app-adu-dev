import reducer, { INITIAL_STATE } from '../reducer'
import * as actions from '../actions'

describe('poll reducer', () => {
  it('should return initial state when undefined state arg', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  describe('action creators', () => {
    it('toggleHeaderNavAction', () => {
      expect(reducer(undefined, actions.toggleHeaderNavAction(true)).headerNav.isOpen).toBe(true)
    })
  })
})