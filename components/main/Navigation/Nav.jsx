import React, { useEffect, useState } from 'react';
import { CaroselDiv, MainLiStyle, MainUlStyle, NavWrap } from '../MainStyle';
import LiItems from './LiItems';
import NavBtnComponent from './NavBtnComponent';

const Nav = ({ state, NavRef, RightClick, LeftClick, autoPlay = true, autoPlayTime = 3000 }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentSlide(currentSlide + 1);
		}, autoPlayTime);
		return () => clearTimeout(timer);
	}, [currentSlide]);
	return (
		<NavWrap>
			<CaroselDiv>
				<MainUlStyle ref={NavRef} style={{ transform: `translateX(-${currentSlide * 100})` }}>
					{state.map((item, index) => {
						return <LiItems key={item.id} title={item.title} name={item.name} />;
					})}
				</MainUlStyle>
				<NavBtnComponent RightClick={RightClick} LeftClick={LeftClick} />
			</CaroselDiv>
		</NavWrap>
	);
};

export default React.memo(Nav);
