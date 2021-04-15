import Link from 'next/link';
import React from 'react';

const LiItem = () => {
	return (
		<>
			<li>
				<Link href="https://github.com/jungjh123456">
					<a target="_blank"></a>
				</Link>
			</li>
			<li>
				<Link href="https://velog.io/@jungjh123456">
					<a target="_blank"></a>
				</Link>
			</li>
		</>
	);
};

export default React.memo(LiItem);
