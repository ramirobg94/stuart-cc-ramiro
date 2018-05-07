import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const checkAdress = createAction(
	actionTypes.GEOCODE,
	(field, value) => ({field, value})
);

export const postJob = createAction(
    actionTypes.POST_JOB,
    () => ({})
)