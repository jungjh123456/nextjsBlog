import Link from 'next/link';
import React from 'react';
import { WebStyleNavStyle } from './WebbStyleHeaderStyle';
import WebStyleLi from './WebStyleLi';

const WebStyleNav = ({ toggleState }) => {
	return (
		<WebStyleNavStyle>
			<ul className={toggleState ? 'navigation active' : 'navigation'}>
				<WebStyleLi />
			</ul>
		</WebStyleNavStyle>
	);
};

export default React.memo(WebStyleNav);
