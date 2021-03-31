import React from 'react';
import Link from 'next/link';
import { HeaderStyle, UlStyle, LiStyle } from './HeaderStyle';
import UlContainer from './UlContainer';
import BuggerBtn from './BuggerBtn';

const Header = ({ styleheader }) => {
	return (
		<HeaderStyle className={styleheader && 'active'}>
			<UlContainer />
			<BuggerBtn />
		</HeaderStyle>
	);
};

export default React.memo(Header);
