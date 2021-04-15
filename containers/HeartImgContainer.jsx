import React, { useEffect, useRef, useState } from 'react';
import HeartImg from '../components/main/heartimg/HeartImg';

const HeartImgContainer = () => {
	const bg = useRef(null);
	const sectionNavRef = useRef();
	const [animation, setAnimation] = useState(false);

	useEffect(() => {
		const options = {
			root: null,
			threshold: 0,
			rootMargin: '-150px 0px  -150px 0px',
		};
		const observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setAnimation(true);
				} else {
					setAnimation(false);
				}
			});
		}, options);
		observer.observe(bg.current);
	}, [animation]);

	return <HeartImg bg={bg} animation={animation} />;
};

export default React.memo(HeartImgContainer);
