import { createAction } from 'redux-actions';
import { SET_ANIMATE_FALURE, SET_ANIMATE_TRUE } from '../types';

export const setAnimeTrue = createAction(SET_ANIMATE_TRUE);

export const setAnimeFalse = createAction(SET_ANIMATE_FALURE);
