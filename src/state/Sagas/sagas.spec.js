import { call, put, select, all } from "redux-saga/effects";

import { geoCodeSaga, postJobSaga, delay } from "./sagas";

import * as selectors from "./selectors";
import * as stuartApi from "../../api/stuart.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

import * as addressesActions from "../Addresses/actionCreators";
import * as uiActions from "../UI/actionCreators";

describe("sagas", () => {
  describe("geoCodeSaga", () => {
    test("proper geoCodeSaga", () => {
      const generator = geoCodeSaga({
        payload: { field: "pickUp", value: "15 Rue de Bourgogne" }
      });

      const field = "pickUp";
      const address = "15 Rue de Bourgogne";

      expect(generator.next().value).toEqual(call(stuartApi.geocode, address));

      const responseData = {
        address: "15 Rue de Bourgogne",
        latitude: 40.0,
        longitude: 18.3
      };

      expect(generator.next(responseData).value).toEqual(
        put(addressesActions.geoCodeAddress(field, responseData))
      );

      expect(generator.next().value).toBeUndefined();
    });

    test("bad geoCodeSaga", () => {
      const generator = geoCodeSaga({
        payload: { field: "pickUp", value: "aa" }
      });

      const field = "pickUp";
      const address = "aa";

      expect(generator.next().value).toEqual(call(stuartApi.geocode, address));

      const responseData = {
        code: "GEOCODE_ERROR",
        message: '"aa" cannot be geocoded.'
      };

      expect(generator.next(responseData).value).toEqual(
        put(addressesActions.geoCodeAddressError(field))
      );

      expect(generator.next().value).toBeUndefined();
    });
  });

  describe("postJobSaga", () => {
    test("proper postJobSaga", () => {
      const generator = postJobSaga({
        payload: {}
      });

      expect(generator.next().value).toEqual(put(uiActions.setLoading()));

      expect(generator.next().value).toEqual(select(selectors.getPickUp));

      const pickUp = {
        address: "15 Rue de Bourgogne",
        latitude: 0,
        longitude: 0,
        error: false,
        valid: false
      };

      expect(generator.next(pickUp).value).toEqual(
        select(selectors.getDropOff)
      );

      const dropOff = {
        address: "15 Rue de Bourgogne",
        latitude: 0,
        longitude: 0,
        error: false,
        valid: false
      };

      expect(generator.next(pickUp, dropOff).value).toEqual(
        call(stuartApi.postJob, {
          pickup: pickUp.address,
          dropoff: dropOff.address
        })
      );

      const responseData = {
        pickup: {
          address: "15 Rue de Bourgogne",
          latitude: 48.8590453,
          longitude: 2.3180404
        },
        dropoff: {
          addres: "15 Rue de Bourgogne",
          latitud: 48.8590453,
          longitud: 2.3180404
        }
      };

      expect(generator.next(responseData).value).toEqual(call(delay, 500));
      expect(generator.next(responseData).value).toEqual(
        all([
          put(uiActions.quitLoading()),
          put(uiActions.putToaster()),
          put(addressesActions.clean())
        ])
      );

      expect(generator.next().value).toBeUndefined();
    });

    test("bad postJobSaga", () => {
      const generator = postJobSaga({
        payload: {}
      });

      expect(generator.next().value).toEqual(put(uiActions.setLoading()));

      expect(generator.next().value).toEqual(select(selectors.getPickUp));

      const pickUp = {
        address: "15 Rue de Bourgogne",
        latitude: 0,
        longitude: 0,
        error: false,
        valid: false
      };

      expect(generator.next(pickUp).value).toEqual(
        select(selectors.getDropOff)
      );

      const dropOff = {
        address: "15 Rue de Bourgogne",
        latitude: 0,
        longitude: 0,
        error: false,
        valid: false
      };

      expect(generator.next(pickUp, dropOff).value).toEqual(
        call(stuartApi.postJob, {
          pickup: pickUp.address,
          dropoff: dropOff.address
        })
      );

      const responseData = {
        code: "JOB_ERROR",
        message: '"pickup" and "dropoff" are required'
      };

      expect(generator.next(responseData).value).toEqual(call(delay, 500));
      expect(generator.next(responseData).value).toEqual(
        put(uiActions.quitLoading())
      );
      expect(generator.next(responseData).value).toBeUndefined();
    });
  });
});