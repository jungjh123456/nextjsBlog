import Link from 'next/link';
import React from 'react';
import { H2Style, UlBlogHistory } from './BlogHistoryStyle';
const BlogHistory = () => {
	return (
		<>
			<H2Style>나의 GitHub {'&&'} Blog</H2Style>
			<UlBlogHistory>
				<li>
					<Link href="https://github.com/jungjh123456">
						<a target="_blank">GitHub2</a>
					</Link>
				</li>
				<li>
					<Link href="https://velog.io/@jungjh123456">
						<a target="_blank">Blog</a>
					</Link>
				</li>
			</UlBlogHistory>
		</>
	);
};

export default BlogHistory;
