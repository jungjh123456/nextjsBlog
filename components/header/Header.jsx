import React from 'react';
import Link from 'next/link';
import { HeaderStyle, UlStyle, LiStyle, TooltioStyle } from './HeaderStyle';
import UlContainer from './UlContainer';
import BuggerBtn from './BuggerBtn';
import AuthModal from '../authModal/AuthModal';

const Header = ({ styleheader, isAnime, modal, modalClick }) => {
	return (
		<HeaderStyle className={styleheader && 'active'} isAnime={isAnime}>
			<UlContainer />
			<BuggerBtn modalClick={modalClick} />
			<TooltioStyle modal={modal}>
				<AuthModal />
			</TooltioStyle>
		</HeaderStyle>
	);
};

function Ecus(prev, next) {
	if (prev.modal === next.modal) {
		return true;
	}
	return false;
}

export default React.memo(Header, Ecus);
