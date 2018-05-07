import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("actions UI", () => {
  test('Set loading', () => {
    expect(actions.setLoading()).toEqual({
      type: actionTypes.SET_LOADING,
      payload: {}
    });
  });

  test('Quit loading', () => {
    expect(actions.quitLoading()).toEqual({
      type: actionTypes.QUIT_LOADING,
      payload: {}
    });
  });
  test('Put toaster', () => {
    expect(actions.putToaster()).toEqual({
      type: actionTypes.PUT_TOASTER,
      payload: {}
    });
  });
  test('Remove toaster', () => {
    expect(actions.removeToaster()).toEqual({
      type: actionTypes.REMOVE_TOASTER,
      payload: {}
    });
  });
});
