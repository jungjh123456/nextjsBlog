import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../components/main/Main';
import { setInfo } from '../redux/actions/main';

const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setInfo());
	}, []);
	const {
		main: { img },
	} = useSelector((item) => item);
	console.log(img);
	return <Main img={img} />;
};

export default MainContainer;
