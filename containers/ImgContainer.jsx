import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackImg from '../components/main/ImgSection/BackImg';
import { setInfo } from '../redux/actions/main';

const ImgContainer = () => {
	return <BackImg />;
};

export default React.memo(ImgContainer);
