import styled, { css } from 'styled-components';

export const BgContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	background: #fff url('/img/heart.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 2s;
	${(props) =>
		props.animation &&
		css`
			/* mix-blend-mode: screen; */
			background-size: 50%;
			h1 {
				font-size: 5rem;
			}
		`}
	a {
		display: block;

		padding: 235px 295px;
	}
	h1 {
		/* position: absolute; */
		color: #fff;
		z-index: 100;
	}
`;
