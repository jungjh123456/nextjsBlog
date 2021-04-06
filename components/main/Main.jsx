import React from 'react';
import BlogHistoryContainer from '../../containers/BlogHistoryContainer';
import ImgContainer from '../../containers/ImgContainer';
import NavContainer from '../../containers/NavContainer';
import BlogHistory from './BlogHistory/BlogHistory';
import { MainWrap, SectionWrapImg, SectionWrapNavigation, SectionWrapSub } from './MainStyle';
import Nav from './Navigation/Nav';

const Main = () => {
	return (
		<MainWrap>
			<SectionWrapNavigation>
				<NavContainer />
			</SectionWrapNavigation>
			<SectionWrapImg>
				<ImgContainer />
			</SectionWrapImg>
			<SectionWrapSub>
				<BlogHistoryContainer />
			</SectionWrapSub>
		</MainWrap>
	);
};

export default React.memo(Main);
