import React, { useEffect, useRef, useState } from 'react';
import WebbStyleHeader from '../../components/webStyleHeader/WebbStyleHeader';

const WebStyleHeaderContainer = () => {
	const toggleRef = useRef();
	const [toggleState, setToggleState] = useState(false);

	useEffect(() => {
		let resi = window.addEventListener('resize', () => {
			if (window.innerWidth < 991) {
				setToggleState(false);
			}
		});

		return () => window.removeEventListener('resize', resi);
	}, []);
	const onToggleClick = () => {
		setToggleState(!toggleState);
	};
	return <WebbStyleHeader onToggleClick={onToggleClick} toggleState={toggleState} />;
};

export default React.memo(WebStyleHeaderContainer);
