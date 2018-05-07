import { combineReducers } from 'redux'
import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

const loading = handleActions(
  {
    [actions.setLoading]: state => {
      return true;
    },
    [actions.quitLoading]: state => {
      return false;
    }
  },
  initialState.loading
);

const toaster = handleActions(
  {
    [actions.putToaster]: state => {
      return true;
    },
    [actions.removeToaster]: state => {
      return false;
    }
  },
  initialState.loading
);

export default combineReducers({
  loading,
  toaster
});
