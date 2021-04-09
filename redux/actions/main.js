// import * as t from '../types';

import { createAction } from 'redux-actions';
import { SET_NAME } from '../types';

// export const setInfo = (name) => ({
// 	type: t.SET_NAME,
// 	payload: name,
// });

export const setInfo = createAction(SET_NAME, (srcImg) => ({
	srcImg,
}));
