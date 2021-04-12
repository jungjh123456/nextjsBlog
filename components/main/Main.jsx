import React from 'react';
import BlogHistoryContainer from '../../containers/BlogHistoryContainer';

import ImgContainer from '../../containers/ImgContainer';
import NavContainer from '../../containers/NavContainer';

import { MainWrap, SectionWrapImg, SectionWrapNavigation, SectionWrapSub } from './MainStyle';

const Main = () => {
	return (
		<MainWrap>
			<SectionWrapImg>
				<ImgContainer />
			</SectionWrapImg>
			<SectionWrapNavigation>
				<NavContainer />
			</SectionWrapNavigation>
			<SectionWrapSub>
				<BlogHistoryContainer />
			</SectionWrapSub>
		</MainWrap>
	);
};

export default React.memo(Main);
