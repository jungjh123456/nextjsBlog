import Link from 'next/link';
import React from 'react';
import { SciUl } from './WebStyleSectionStyle';

const FtfLogo = () => {
	return (
		<SciUl>
			<li>
				<Link href="#">
					<a>
						<img src="img/twitter.png" alt="" />
					</a>
				</Link>
			</li>
			<li>
				<Link href="#">
					<a>
						<img src="img/instagram.png" alt="" />
					</a>
				</Link>
			</li>
		</SciUl>
	);
};

export default FtfLogo;
