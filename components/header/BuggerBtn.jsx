import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ButtonStyle } from './HeaderStyle';
const BuggerBtn = ({ modalClick }) => {
	return (
		<ButtonStyle onClick={modalClick}>
			<GiHamburgerMenu />
		</ButtonStyle>
	);
};

export default React.memo(BuggerBtn);
