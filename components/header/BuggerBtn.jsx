import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ButtonStyle } from './HeaderStyle';
const BuggerBtn = () => {
	return (
		<ButtonStyle>
			<GiHamburgerMenu />
		</ButtonStyle>
	);
};

export default React.memo(BuggerBtn);
