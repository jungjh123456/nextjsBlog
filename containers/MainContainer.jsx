import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from '../components/main/Main';
import { setInfo } from '../redux/actions/main';

const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setInfo());
	});
	return <Main />;
};

export default MainContainer;
