import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const setLoading = createAction(
	actionTypes.SET_LOADING,
	() => ({})
);

export const quitLoading = createAction(
	actionTypes.QUIT_LOADING,
	() => ({})
);

export const putToaster = createAction(
	actionTypes.PUT_TOASTER,
	() => ({})
);

export const removeToaster = createAction(
	actionTypes.REMOVE_TOASTER,
	() => ({})
);
