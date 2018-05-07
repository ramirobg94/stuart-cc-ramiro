import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./state/index";
import rootSagas from "./state/sagas-registration";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let store = createStore(reducer, {} ,applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSagas);
  return store;
}
