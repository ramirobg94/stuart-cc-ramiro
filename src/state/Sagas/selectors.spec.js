import * as selectors from "./selectors";

import reducer from "../index";

const initialState = {
  Addresses: {
    dropOff: {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    },
    pickUp: {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    }
  },
  UI: { loading: false, toaster: false }
};

describe("selectors Home", () => {
  const state = reducer(undefined, { type: "" });

  test("initial state", () => {
    expect(state).toEqual(initialState);
  });

  test("PickUp Selector", () => {
    expect(selectors.getPickUp(state)).toEqual(state.Addresses.pickUp);
  });

  test("DropOff Selector", () => {
    expect(selectors.getDropOff(state)).toEqual(state.Addresses.dropOff);
  });
});
