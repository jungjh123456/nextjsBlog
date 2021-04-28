import Link from 'next/link';
import React from 'react';

const WebStyleLi = () => {
	return (
		<>
			<li>
				<Link href="/">
					<a className="active">Home</a>
				</Link>{' '}
			</li>
			<li>
				<Link href="/">
					<a>About</a>
				</Link>{' '}
			</li>
			<li>
				<Link href="/">
					<a>Calendar</a>
				</Link>{' '}
			</li>
			<li>
				<Link href="/">
					<a>Blog</a>
				</Link>{' '}
			</li>
			<li>
				<Link href="/">
					<a>Contact</a>
				</Link>{' '}
			</li>
		</>
	);
};

export default React.memo(WebStyleLi);
