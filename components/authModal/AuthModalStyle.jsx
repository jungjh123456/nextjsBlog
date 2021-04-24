import styled from 'styled-components';

export const UlStyleModal = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: column;

	width: 100%;
	color: #000;
	li {
		display: flex;
		min-height: 50px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		button {
			display: block;
			cursor: pointer;
			background: none;
			border: 0;
			width: 100%;
			font-size: 3rem;
			transition: background-color 1s;
			font-weight: 800;
			&:hover {
				background-color: rgba(0, 0, 0, 0.5);
			}
		}
	}
`;
