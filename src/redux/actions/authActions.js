import { TEST_DISPATCH } from './types'

export const signUpUser = (userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  }
}
