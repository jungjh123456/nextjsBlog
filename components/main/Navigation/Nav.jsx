import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { CaroselDiv, MainLiStyle, MainUlStyle, NavWrap } from '../MainStyle';
import LiItems from './LiItems';
import NavBtnComponent from './NavBtnComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Nav = ({ state, NavRef, RightClick, LeftClick, autoPlay = true, autoPlayTime = 3000 }) => {
	const [settings] = useState({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	return (
		<Slider {...settings}>
			{state.map((item) => {
				return <LiItems item={item} />;
			})}
		</Slider>
	);
};

export default React.memo(Nav);
