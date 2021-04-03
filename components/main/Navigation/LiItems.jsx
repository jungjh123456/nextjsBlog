import React from 'react';
import { MainLiStyle } from '../MainStyle';

const LiItems = ({ item }) => {
	return (
		<MainLiStyle>
			{
				<>
					<h1>{item.name}</h1>
					<span>{item.title}</span>
				</>
			}
		</MainLiStyle>
	);
};

function equl(prev, next) {
	return false;
}

export default React.memo(LiItems, equl);
