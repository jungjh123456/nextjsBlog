import React from 'react';
import { ToggleBarBtnStyle } from './WebbStyleHeaderStyle';

const ToggleBar = ({ onToggleClick, toggleState }) => {
	console.log(toggleState);
	return (
		<ToggleBarBtnStyle onClick={onToggleClick} className="toggle" toggleState={toggleState}>
			<div className="top-bar"></div>
			<div className="middle-bar"></div>
			<div className="bottom-bar"></div>
		</ToggleBarBtnStyle>
	);
};

export default React.memo(ToggleBar);
