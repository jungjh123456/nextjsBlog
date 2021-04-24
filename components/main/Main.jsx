import React from 'react';
import styled from 'styled-components';
import BlogHistoryContainer from '../../containers/BlogHistoryContainer';
import HeartImgContainer from '../../containers/HeartImgContainer';

import ImgContainer from '../../containers/ImgContainer';
import NavContainer from '../../containers/NavContainer';
import Tooltio from '../Tooltio';
import HeartImg from './heartimg/HeartImg';

import { MainWrap, SectionWrapImg, SectionWrapNavigation, SectionWrapSub } from './MainStyle';
const TooltioStyle = styled.div`
	display: block;
	position: fixed;
	width: 30vw;
	top: 0;
	bottom: 0;

	transform: translateX(0%);
	background-color: red;
	z-index: 1;
	transition: 1s;
	/* transform: translate(-50%, -50%); */
	a {
		color: red;
	}
`;
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
