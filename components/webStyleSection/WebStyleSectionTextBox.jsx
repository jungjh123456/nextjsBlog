import Link from 'next/link';
import React from 'react';
import { TextBox } from './WebStyleSectionStyle';

const WebStyleSectionTextBox = () => {
	return (
		<TextBox>
			<h2>Happy Logo kareem</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dicta aliquam sit labore dolorem dolore neque
				maiores, necessitatibus non repellendus ratione pariatur iure repellat quasi illum, doloribus omnis explicabo.
				Ut!
			</p>
			<Link href="#">
				<a>Read More</a>
			</Link>
		</TextBox>
	);
};

export default WebStyleSectionTextBox;
