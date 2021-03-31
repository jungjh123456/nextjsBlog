import React from 'react';
import { MainLiStyle } from '../MainStyle';

const LiItems = ({ title, name }) => {
	return (
		<MainLiStyle>
			{
				<>
					<h1>{name}</h1>
					<span>{title}</span>
				</>
			}
		</MainLiStyle>
	);
};

export default React.memo(LiItems);
