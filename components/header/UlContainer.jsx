import React from 'react';
import { LiStyle, UlStyle } from './HeaderStyle';
import Link from 'next/link';
const UlContainer = () => {
	return (
		<UlStyle>
			<LiStyle>
				<Link href="/blog">
					<a>Home</a>
				</Link>
			</LiStyle>
			<LiStyle>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</LiStyle>
			<LiStyle>
				<Link href="/blog">
					<a>GitHub</a>
				</Link>
			</LiStyle>
		</UlStyle>
	);
};

export default React.memo(UlContainer);
