import Link from 'next/link';
import React from 'react';
import { H2Style, UlBlogHistory } from './BlogHistoryStyle';
import LiItem from './LiItem';
const BlogHistory = ({ anime }) => {
	return (
		<>
			<H2Style>나의 GitHub {'&&'} Blog</H2Style>
			<UlBlogHistory anime={anime}>
				<LiItem />
			</UlBlogHistory>
		</>
	);
};

export default React.memo(BlogHistory);
