import { all, fork } from "redux-saga/effects";

import { watchGeoCode, watchPostJob} from './Sagas/sagas'

export default function* root() {
    yield all([
        fork(watchGeoCode),
        fork(watchPostJob)
      ])
}
