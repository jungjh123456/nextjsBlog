import React from 'react';
import { BackSectionDiv, Img } from './ImgStyle';

const BackImg = () => {
	return (
		<BackSectionDiv>
			<h1>Blog</h1>
			<span>이곳은 블로그 페이지 입니다.</span>
		</BackSectionDiv>
	);
};

export default React.memo(BackImg);
