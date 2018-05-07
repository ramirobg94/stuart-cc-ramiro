import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const handleChange = createAction(
  actionTypes.HANDLE_CHANGE,
  (field, value) => ({ field, value })
);

export const geoCodeAddress = createAction(
  actionTypes.GEOCODE_ADDRESS,
  (field, responseData) => ({ field, responseData })
);

export const geoCodeAddressError = createAction(
  actionTypes.GEOCODE_ADDRESS_ERROR,
  field => ({ field })
);

export const clean = createAction(actionTypes.CLEAN, () => ({}));
