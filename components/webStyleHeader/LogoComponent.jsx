import Link from 'next/link';
import React from 'react';

const LogoComponent = () => {
	return (
		<Link href="#">
			<a className="logo">Logo</a>
		</Link>
	);
};

export default React.memo(LogoComponent);
