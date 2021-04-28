import React from 'react';
import { LiStyle, UlStyle } from './HeaderStyle';
import Link from 'next/link';
const UlContainer = () => {
	return (
		<UlStyle>
			<LiStyle>
				<Link href="#blogSection">
					<a tabIndex="0">Home</a>
				</Link>
			</LiStyle>
			<LiStyle>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</LiStyle>
			<LiStyle>
				<Link href="/webStyle">
					<a>webStyle</a>
				</Link>
			</LiStyle>
		</UlStyle>
	);
};

export default React.memo(UlContainer);
