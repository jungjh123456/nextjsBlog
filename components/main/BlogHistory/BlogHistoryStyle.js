import styled from 'styled-components';

export const H2Style = styled.h2``;

export const UlBlogHistory = styled.ul`
	padding: 0;
	font-size: 0;
	display: flex;
	flex-direction: row;
	& > li > a:hover {
		border: 0;
	}
	li {
		font-size: 1.4rem;
		width: 100%;
		border: 1px solid;
		&:first-child {
		}

		& > a:hover {
			border: 0;
		}
		a {
			display: block;
			padding: 0 0 100px 0;
			/* width: 100%; */
			transition: background-color 0.4s;
			&:hover {
				background-color: #353523;
			}
		}
	}
`;
