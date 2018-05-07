import reducer from "./reducer";
import * as actionTypes from "./actionTypes";
import initialState from "./initial.state";

describe("Adress reducer", () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, { type: "" });
  });

  test("initial state", () => {
    expect(state).toEqual(initialState);
  });

  test("handle change address pickUp", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.HANDLE_CHANGE,
        payload: { field: "pickUp", value: "aa" }
      })
    );
    expected.toHaveProperty("pickUp", {
      address: "aa",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
    expected.toHaveProperty("dropOff", {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
  });

  test("handle change address dropOff", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.HANDLE_CHANGE,
        payload: { field: "dropOff", value: "aa" }
      })
    );
    expected.toHaveProperty("pickUp", {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
    expected.toHaveProperty("dropOff", {
      address: "aa",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
  });

  test("Geocode pickUp", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.GEOCODE_ADDRESS,
        payload: {
          field: "pickUp",
          responseData: { address: "a", latitude: 40.0, longitude: 10.4 }
        }
      })
    );
    expected.toHaveProperty("pickUp", {
      address: "a",
      error: false,
      latitude: 40.0,
      longitude: 10.4,
      valid: true
    });
    expected.toHaveProperty("dropOff", {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
  });

  test("Geocode dropOff", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.GEOCODE_ADDRESS,
        payload: {
          field: "dropOff",
          responseData: { address: "a", latitude: 40.0, longitude: 10.4 }
        }
      })
    );
    expected.toHaveProperty("dropOff", {
      address: "a",
      error: false,
      latitude: 40.0,
      longitude: 10.4,
      valid: true
    });
    expected.toHaveProperty("pickUp", {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
  });

  test("Geocode pickUp error", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.GEOCODE_ADDRESS_ERROR,
        payload: { field: "pickUp" }
      })
    );
    expected.toHaveProperty("pickUp", {
      address: "",
      error: true,
      latitude: 0,
      longitude: 0,
      valid: false
    });
    expected.toHaveProperty("dropOff", {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
  });

  test("Geocode dropOff error", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.GEOCODE_ADDRESS_ERROR,
        payload: { field: "dropOff" }
      })
    );
    expected.toHaveProperty("dropOff", {
      address: "",
      error: true,
      latitude: 0,
      longitude: 0,
      valid: false
    });
    expected.toHaveProperty("pickUp", {
      address: "",
      error: false,
      latitude: 0,
      longitude: 0,
      valid: false
    });
  });

  test("Geocode clean", () => {
    const expected = expect(
      reducer(state, {
        type: actionTypes.CLEAN,
        payload: {}
      })
    );
    expected.toEqual(initialState);
  });
});
