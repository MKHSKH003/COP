import {
  LOGIN_SUCCESS
} from './actions'

export const initialState = {
  status: {
    success: false,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: {
          success: true
        }
      }
    default:
      return state
  }
}