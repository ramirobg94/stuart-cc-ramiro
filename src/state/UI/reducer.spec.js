import reducer from "./reducer";
import * as actionTypes from "./actionTypes";

const initialState = { loading: false, toaster: false };
describe("Adress reducer", () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, { type: "" });
  });

  test("initial state", () => {
    expect(state).toEqual(initialState);
  });

  test("Set Loading", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.SET_LOADING,
        payload: {}
      })
    );

    expected.toHaveProperty("loading", true);
    expected.toHaveProperty("toaster", false);
  });

  test("Quit Loading", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.QUIT_LOADING,
        payload: {}
      })
    );

    expected.toHaveProperty("loading", false);
    expected.toHaveProperty("toaster", false);
  });

  test("Set Toaster", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.PUT_TOASTER,
        payload: {}
      })
    );

    expected.toHaveProperty("loading", false);
    expected.toHaveProperty("toaster", true);
  });

  test("Quit Toaster", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.REMOVE_TOASTER,
        payload: {}
      })
    );

    expected.toHaveProperty("loading", false);
    expected.toHaveProperty("toaster", false);
  });

});
