import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("actions Addresses", () => {
  test(`${actionTypes.HANDLE_CHANGE}`, () => {
    expect(actions.handleChange("pickUp", "a")).toEqual({
      type: actionTypes.HANDLE_CHANGE,
      payload: { field: "pickUp", value: "a" }
    });
  });

  test(`${actionTypes.GEOCODE_ADDRESS}`, () => {
    expect(
      actions.geoCodeAddress("pickUp", {
        address: "a",
        latitude: 40.0,
        longitude: 10.4
      })
    ).toEqual({
      type: actionTypes.GEOCODE_ADDRESS,
      payload: {
        field: "pickUp",
        responseData: { address: "a", latitude: 40.0, longitude: 10.4 }
      }
    });
  });

  test(`${actionTypes.GEOCODE_ADDRESS_ERROR}`, () => {
    expect(actions.geoCodeAddressError("pickUp")).toEqual({
      type: actionTypes.GEOCODE_ADDRESS_ERROR,
      payload: { field: "pickUp" }
    });
  });

  test(`${actionTypes.CLEAN}`, () => {
    expect(actions.clean()).toEqual({
      type: actionTypes.CLEAN,
      payload: {}
    });
  });
});
