import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';

const HeaderContainer = () => {
	const [styleheader, setStyleHeader] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 20) {
				setStyleHeader(true);
			} else {
				setStyleHeader(false);
			}
		});
	}, [styleheader]);
	return <Header styleheader={styleheader} />;
};

export default React.memo(HeaderContainer);
