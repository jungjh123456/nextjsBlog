import styled, { css } from 'styled-components';

export const MainWrap = styled.main`
	min-height: 400px;
	background-image: url('/img/Bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
`;

export const SectionWrapNavigation = styled.section`
	/* overflow: hidden; */
	position: relative;
	height: 800px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
	/* background-color: #fff; */
`;

export const NavWrap = styled.nav`
	position: relative;
	width: 100%;
	position: relative;
	display: flse;
	height: 100%;
`;
export const CaroselDiv = styled.div`
	width: 100%;
	height: 100%;
`;
export const MainUlStyle = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	transition: transform 1s;
	transform: translateX(0%);
	height: 100%;
	align-items: center;
	margin-left: 10%;
	/* min-width: 100%; */
`;

export const MainLiStyle = styled.li`
	min-width: 100%;

	transition: transform 1s;
	h1 {
		font-size: 2rem;
	}
	span {
		font-size: 1.6rem;
	}
`;

export const NavBtnDiv = styled.div`
	border: 1px solid;
	width: 100%;
`;

export const RightBtn = styled.button`
	position: absolute;
	right: 4%;
	bottom: 50%;
	transform: translateY(-50%);
`;

export const LeftBtn = styled.button`
	position: absolute;
	left: 4%;
	bottom: 50%;
	transform: translateY(-50%);
`;

export const SectionWrapImg = styled.section`
	min-width: 100%;
	min-height: 600px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
`;

export const SectionWrapSub = styled.section`
	/* border: 1px solid; */
	min-height: 300px;
	position: relative;
	overflow: hidden;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
	background-color: #000;
	/* padding-bottom: 10px; */
`;
