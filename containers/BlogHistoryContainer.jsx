import React from 'react';
import { useSelector } from 'react-redux';
import BlogHistory from '../components/main/BlogHistory/BlogHistory';

const BlogHistoryContainer = ({ anime }) => {
	return <BlogHistory anime={anime} />;
};

export default React.memo(BlogHistoryContainer);
