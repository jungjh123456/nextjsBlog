import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import Nav from '../components/main/Navigation/Nav';

const NavContainer = () => {
	const [state, setState] = useState([
		{ id: nanoid(), title: '여기는 블로그 홈페이지입니다.', name: '블로그' },
		{ id: nanoid(), title: '포토폴리오 사이트 입니다.', name: '블로그' },
		{ id: nanoid(), title: '살려줘...', name: '블로그' },
	]);
	const NavRef = useRef();
	useEffect(() => {
		console.log(NavRef.current.children);
	});
	const [slice, setSlice] = useState();
	const length = state.length;

	const [current, setCurrent] = useState(0);

	if (!Array.isArray(state) || state.length <= 0) {
		return null;
	}

	const [counter, setCounter] = useState(1);

	const transitionEnd = () => {
		NavRef.current.addEventListener('transitionend', () => {
			if (state.length - 1 <= current) {
				console.log('dd');
			}
		});
	};

	const slideActive = (cu) => {
		NavRef.current.style.transform = `translateX(-${cu}00%)`;
	};
	const RightClick = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);

		slideActive(current);

		transitionEnd();
	};

	const LeftClick = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		slideActive(current);
	};
	return <Nav NavRef={NavRef} state={state} RightClick={RightClick} LeftClick={LeftClick} />;
};

export default NavContainer;
