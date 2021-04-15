import Link from 'next/link';
import React from 'react';
import { H2Style, UlBlogHistory } from './BlogHistoryStyle';
import LiItem from './LiItem';
const BlogHistory = ({ isAnime }) => {
	console.log(isAnime);
	return (
		<>
			<H2Style>제 블로그하고 깃 헙을 보고 싶나요? </H2Style>
			<UlBlogHistory isAnime={isAnime}>
				<LiItem />
			</UlBlogHistory>
		</>
	);
};

export default React.memo(BlogHistory);
