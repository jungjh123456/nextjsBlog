import React from 'react';
import { useSelector } from 'react-redux';
import BlogHistory from '../components/main/BlogHistory/BlogHistory';

const BlogHistoryContainer = () => {
	const {
		header: { isAnime },
	} = useSelector((header) => header);
	return <BlogHistory isAnime={isAnime} />;
};

export default React.memo(BlogHistoryContainer);
