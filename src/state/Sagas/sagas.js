import { call, put, select, takeEvery, all} from "redux-saga/effects";
import * as stuartApi from "../../api/stuart.api";

import * as actionTypes from "./actionTypes";
import * as selectors from "./selectors";
import * as actions from "./actionCreators";

import * as addressesActions from "../Addresses/actionCreators";
import * as uiActions from "../UI/actionCreators";

/**
 * SAGAS
 */

export function* geoCodeSaga(action) {
  try {
    const responseData = yield call(stuartApi.geocode, action.payload.value);
    if (responseData.code !== undefined) {
      throw responseData.code;
    } else {
      yield put(
        addressesActions.geoCodeAddress(action.payload.field, responseData)
      );
    }
  } catch (err) {
    yield put(addressesActions.geoCodeAddressError(action.payload.field));
  }
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* postJobSaga(action) {
  yield put(uiActions.setLoading());
  try {
    const pickUp = yield select(selectors.getPickUp);
    const dropOff = yield select(selectors.getDropOff);

    const responseData = yield call(
      stuartApi.postJob, {pickup: pickUp.address, dropoff: dropOff.address})
      
    yield call(delay, 500);
    if (responseData.code !== undefined) {
      throw responseData.code;
    } else {
      yield all([
        put(uiActions.quitLoading()),
        put(uiActions.putToaster()),
        put(addressesActions.clean())
      ]);
    }
  } catch (err) {
    yield put(uiActions.quitLoading());
  }
}

/**
 * WATCHERS
 */

export function* watchGeoCode() {
  yield takeEvery(actionTypes.GEOCODE, geoCodeSaga);
}

export function* watchPostJob() {
  yield takeEvery(actionTypes.POST_JOB, postJobSaga);
}
