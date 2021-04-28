import React from 'react';
import WebStyleContainer from '../containers/webStyle/WebStyleContainer';
import WebStyleHeaderContainer from '../containers/webStyle/WebStyleHeaderContainer';

const webStyle = () => {
	return (
		<>
			<WebStyleHeaderContainer />
			<WebStyleContainer />
		</>
	);
};

export default webStyle;
