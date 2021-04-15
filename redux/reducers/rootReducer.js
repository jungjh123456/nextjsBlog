import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import main, { mainSaga } from './main';
import header from './header';

const rootReducer = combineReducers({
	main,
	header,
});

export function* rootSaga() {
	yield all([mainSaga()]);
}

export default rootReducer;
