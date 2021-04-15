import Link from 'next/link';
import React from 'react';
import { BgContainer } from './HeartImgStyle';

const HeartImg = ({ bg, animation }) => {
	return (
		<BgContainer ref={bg} animation={animation}>
			<Link href="/">
				<a>
					<h1>Chatting</h1>
				</a>
			</Link>
		</BgContainer>
	);
};

export default React.memo(HeartImg);
