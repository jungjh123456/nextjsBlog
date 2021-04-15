import React from 'react';
import BlogHistoryContainer from '../../containers/BlogHistoryContainer';
import HeartImgContainer from '../../containers/HeartImgContainer';

import ImgContainer from '../../containers/ImgContainer';
import NavContainer from '../../containers/NavContainer';
import HeartImg from './heartimg/HeartImg';

import { MainWrap, SectionWrapImg, SectionWrapNavigation, SectionWrapSub } from './MainStyle';

const Main = ({ img, sectionRef }) => {
	return (
		<MainWrap>
			<SectionWrapImg img={img}>
				<ImgContainer />
			</SectionWrapImg>
			<SectionWrapNavigation>
				<HeartImgContainer />
			</SectionWrapNavigation>
			<SectionWrapSub id="blogSection" ref={sectionRef}>
				<BlogHistoryContainer />
			</SectionWrapSub>
		</MainWrap>
	);
};

export default React.memo(Main);
