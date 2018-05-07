import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

export default handleActions(
  {
    [actions.handleChange]: (state, { payload: { field, value } }) => {
      return {
        ...state,
        [field]: {
          ...state[field],
          address: value,
          valid: false,
          error: false
        }
      };
    },
    [actions.geoCodeAddress]: (state, { payload: { field, responseData } }) => {
      return {
        ...state,
        [field]: {
          ...state[field],
          ...responseData,
          valid: true,
          error: false
        }
      };
    },
    [actions.geoCodeAddressError]: (state, { payload: { field } }) => {
      return {
        ...state,
        [field]: {
          ...state[field],
          valid: false,
          error: true
        }
      };
    },
    [actions.clean]: () => {
        return initialState
      }
  },
  initialState
);
