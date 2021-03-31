import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import HeaderContainer from '../containers/HeaderContainer';
import MainContainer from '../containers/MainContainer';

export default function Home() {
	return (
		<>
			<HeaderContainer />
			<MainContainer />
		</>
	);
}
