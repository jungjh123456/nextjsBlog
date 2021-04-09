import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import main, { mainSaga } from './main';

const rootReducer = combineReducers({
	main,
});

export function* rootSaga() {
	yield all([mainSaga()]);
}

export default rootReducer;
