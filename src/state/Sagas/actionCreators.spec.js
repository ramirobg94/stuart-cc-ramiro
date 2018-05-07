import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("actions Sagas", () => {
  test('Check address', () => {
    expect(actions.checkAdress()).toEqual({
      type: actionTypes.GEOCODE,
      payload: {}
    });
  });

  test('Post job', () => {
    expect(actions.postJob()).toEqual({
      type: actionTypes.POST_JOB,
      payload: {}
    });
  });

});
