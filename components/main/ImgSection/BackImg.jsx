import React from 'react';
import { BackSectionDiv, Img } from './ImgStyle';

const BackImg = () => {
	return (
		<BackSectionDiv>
			<h1>Blog</h1>
			<span>버그가 아니라 기능입니다.</span>
		</BackSectionDiv>
	);
};

export default React.memo(BackImg);
