import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* background-color: rgba(0, 0, 0, 0.2); */
	z-index: 100;
	padding: 0;
	/* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); */
	transition: background-color 0.5s;
	min-height: 100px;
	svg {
		color: #000;
	}
	${(props) => {
		return (
			props.isAnime &&
			css`
				background-color: #fff !important;
				svg {
					color: #000 !important;
				}
				ul {
					color: #000 !important;
				}
			`
		);
	}}
	&.active {
		background-color: #000;
		color: #fff;
		svg {
			color: #fff;
		}
	}
	&.active > ul {
		color: #fff;
	}
`;

export const UlStyle = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	margin-right: 30px;
	padding: 30px 0;
	color: #000;
	box-sizing: border-box;
`;

export const LiStyle = styled.li`
	list-style: none;

	margin-right: 10px;
	&:hover {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	padding: 5px 0;
	a {
		display: block;
		padding: 0 10px;
		font-weight: 800;
		font-size: 1.5rem;
	}
`;

export const ButtonStyle = styled.button`
	margin-right: 10px;
	background: none;
	border: 0;
	display: flex;
	color: #fff;
	svg {
		font-size: 2rem;
	}
`;

export const TooltioStyle = styled.div`
	display: flex;
	position: fixed;

	width: 30vw;
	top: 0;
	bottom: 0;
	left: 0;
	transform: translateX(-100%);
	backdrop-filter: blur(15px);
	z-index: 1;
	transition: 1s;
	/* justify-content: center; */
	align-items: center;
	${(props) =>
		props.modal &&
		css`
			transform: translateX(0%);
		`}
	/* transform: translate(-50%, -50%); */
	a {
		color: red;
	}
`;
