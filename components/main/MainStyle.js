import styled from 'styled-components';

export const MainWrap = styled.main`
	height: 400px;
	min-height: 400px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;

export const SectionWrap = styled.section`
	overflow: hidden;
	height: 100%;
`;

export const NavWrap = styled.nav`
	position: relative;
	width: 100vw;
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
