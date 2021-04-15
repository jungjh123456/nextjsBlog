import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';

const HeaderContainer = () => {
	const [styleheader, setStyleHeader] = useState(false);
	const {
		header: { isAnime },
	} = useSelector((header) => header);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 20) {
				setStyleHeader(true);
			} else {
				setStyleHeader(false);
			}
		});
	}, [styleheader]);
	return <Header styleheader={styleheader} isAnime={isAnime} />;
};

export default React.memo(HeaderContainer);
