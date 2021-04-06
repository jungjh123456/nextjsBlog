import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import Nav from '../components/main/Navigation/Nav';

const NavContainer = () => {
	const [state, setState] = useState([
		{ id: nanoid(), title: '여기는 블로그 홈페이지입니다.', name: '블로그' },
		{ id: nanoid(), title: '포토폴리오 사이트 입니다.', name: '블로그' },
		{ id: nanoid(), title: '...', name: '블로그' },
	]);

	return <Nav state={state} />;
};

export default React.memo(NavContainer);
