import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../components/main/Main';
import { setInfo } from '../redux/actions/main';

const MainContainer = () => {
	const dispatch = useDispatch();
	const [anime, setAnime] = useState(false);
	const sectionRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach((entry) => {
				console.log(entry.isIntersecting);
				if (entry.isIntersecting) {
					setAnime(true);
				} else {
					setAnime(false);
				}
			});
		});
		observer.observe(sectionRef.current);
	}, [anime]);
	console.log(anime);
	useEffect(() => {
		dispatch(setInfo());
	}, []);
	console.log(sectionRef);
	const {
		main: { img },
	} = useSelector((item) => item);
	console.log(img);
	return <Main img={img} anime={anime} sectionRef={sectionRef} />;
};

export default MainContainer;
