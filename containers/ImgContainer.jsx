import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackImg from '../components/main/ImgSection/BackImg';
import { setInfo } from '../redux/actions/main';

const ImgContainer = () => {
	const {
		main: { img },
	} = useSelector((item) => item);
	console.log(img);
	useEffect(() => {});
	return <BackImg img={img} />;
};

export default ImgContainer;
