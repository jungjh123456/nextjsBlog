import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../components/main/Main';
import { setAnimeFalse, setAnimeTrue } from '../redux/actions/header';
import { setInfo } from '../redux/actions/main';

const MainContainer = () => {
	const dispatch = useDispatch();
	// const [anime, setAnime] = useState(false);
	const sectionRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach((entry) => {
				console.log(entry.isIntersecting);
				if (entry.isIntersecting) {
					// setAnime(true);
					dispatch(setAnimeTrue());
				} else {
					// setAnime(false);
					dispatch(setAnimeFalse());
				}
			});
		});
		observer.observe(sectionRef.current);
	}, []);

	useEffect(() => {
		dispatch(setInfo());
	}, []);

	const {
		main: { img },
	} = useSelector((item) => item);
	console.log(img);
	return <Main img={img} sectionRef={sectionRef} />;
};

export default MainContainer;
