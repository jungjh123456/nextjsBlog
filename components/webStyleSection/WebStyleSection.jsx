import Link from 'next/link';
import React from 'react';
import FtfLogo from './FtfLogo';
import { WebStyleSectionStyle } from './WebStyleSectionStyle';
import WebStyleSectionTextBox from './WebStyleSectionTextBox';

const WebStyleSection = () => {
	return (
		<>
			<WebStyleSectionStyle className="content">
				<img src="img/8317.jpg" alt="" className="mosque" />
				<WebStyleSectionTextBox />
				<FtfLogo />
			</WebStyleSectionStyle>
		</>
	);
};

export default WebStyleSection;
