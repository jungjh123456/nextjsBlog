import styled, { css } from 'styled-components';

export const H2Style = styled.h2`
	padding: 10px;
	font-size: 3rem;
	font-weight: 800;
	color: #fff;
`;

export const UlBlogHistory = styled.ul`
	padding: 0;
	font-size: 0;
	display: flex;
	flex-direction: row;
	overflow: hidden;

	li {
		font-size: 1.4rem;
		width: 100%;
		transition: transform 1s;
		background-color: #000;

		${(props) => {
			console.log(props);
			return props.isAnime
				? css`
						&:first-child {
							transform: translateX(0%);
						}
						&:last-child {
							transform: translateX(0%);
						}
				  `
				: css`
						&:first-child {
							transform: translateX(-100%);
						}
						&:last-child {
							transform: translateX(100%);
						}
				  `;
		}}
		&:first-child {
			background: #000 url('/img/gitimg.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
		&:first-child:hover {
			transform: scale(1.2);
		}
		&:last-child {
			background: #000 url('/img/velogimgs.jpeg');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
		&:last-child:hover {
			transform: scale(1.2);
		}
		& > a:hover {
			border: 0;
		}
		a {
			display: flex;
			height: 200px;

			/* flex-direction: column; */
			justify-content: center;
			align-items: center;
			/* padding: 0 0 100px 0; */
			/* width: 100%; */
			transition: background-color 0.4s;
			&:hover {
				/* background-color: rgba(0, 0, 0, 0.1); */
			}
		}
	}
`;
