import styled, { css } from 'styled-components';

export const H2Style = styled.h2`
	padding: 10px;
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
		background-color: #fff;
		/* &:first-child {
			transform: translateX(0%);
		}
		&:last-child {
			transform: translateX(0%);
		} */
		${(props) => {
			console.log(props);
			return props.anime
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
		& > a:hover {
			border: 0;
		}
		a {
			display: flex;
			height: 100px;
			/* flex-direction: column; */
			justify-content: center;
			align-items: center;
			/* padding: 0 0 100px 0; */
			/* width: 100%; */
			transition: background-color 0.4s;
			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}
`;
