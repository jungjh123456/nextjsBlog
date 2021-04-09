import { handleActions } from 'redux-actions';
import createRequestSaga from '../Api/createRequestSaga';
import { SET_NAME, SET_NAME_SUCCESS } from '../types';
import * as API from '../Api/imgs';
import { takeLatest } from '@redux-saga/core/effects';
const initialState = {
	userInfo: {
		img: '',
	},
};

const main = handleActions(
	{
		[SET_NAME_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				userInfo: { img: payload.config.url },
			};
		},
	},
	initialState
);
const getImg = createRequestSaga(SET_NAME, API.getImg);

export function* mainSaga() {
	yield takeLatest(SET_NAME, getImg);
}

export default main;
