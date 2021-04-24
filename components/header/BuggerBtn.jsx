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
function Ecurs(prev, next) {
	if (prev.modalClick === next.modalClick) {
		return true;
	}
	return false;
}
export default React.memo(BuggerBtn, Ecurs);
