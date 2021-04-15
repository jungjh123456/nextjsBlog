import React from 'react';
import Link from 'next/link';
import { HeaderStyle, UlStyle, LiStyle } from './HeaderStyle';
import UlContainer from './UlContainer';
import BuggerBtn from './BuggerBtn';

const Header = ({ styleheader, isAnime }) => {
	return (
		<HeaderStyle className={styleheader && 'active'} isAnime={isAnime}>
			<UlContainer />
			<BuggerBtn />
		</HeaderStyle>
	);
};

export default React.memo(Header);
