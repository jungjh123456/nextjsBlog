import React from 'react';
import NavContainer from '../../containers/NavContainer';
import { MainWrap, SectionWrap } from './MainStyle';
import Nav from './Navigation/Nav';

const Main = () => {
	return (
		<MainWrap>
			<SectionWrap>
				<NavContainer />
			</SectionWrap>
		</MainWrap>
	);
};

export default React.memo(Main);
