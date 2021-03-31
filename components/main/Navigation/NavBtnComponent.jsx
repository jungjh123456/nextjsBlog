import React from 'react';
import { LeftBtn, NavBtnDiv, RightBtn } from '../MainStyle';

const NavBtnComponent = ({ RightClick, LeftClick }) => {
	return (
		<NavBtnDiv>
			<RightBtn onClick={RightClick}>오른쪽</RightBtn>
			<LeftBtn onClick={LeftClick}>왼쪽</LeftBtn>
		</NavBtnDiv>
	);
};

export default React.memo(NavBtnComponent);
