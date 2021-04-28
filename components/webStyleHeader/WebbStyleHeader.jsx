import Link from 'next/link';
import React from 'react';
import LogoComponent from './LogoComponent';
import ToggleBar from './ToggleBar';
import { WebStyleHeaderStyle } from './WebbStyleHeaderStyle';
import WebStyleNav from './WebStyleNav';

const WebbStyleHeader = ({ onToggleClick, toggleState }) => {
	return (
		<WebStyleHeaderStyle>
			<LogoComponent />
			<ToggleBar onToggleClick={onToggleClick} toggleState={toggleState} />
			<WebStyleNav toggleState={toggleState} />
		</WebStyleHeaderStyle>
	);
};

export default React.memo(WebbStyleHeader);
