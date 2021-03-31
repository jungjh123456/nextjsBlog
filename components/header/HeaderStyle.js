import styled from 'styled-components';

export const HeaderStyle = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 100;
	padding: 0;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
	transition: background-color 0.5s;
	min-height: 100px;
	&.active {
		background-color: rgb(0, 0, 0);
		color: #fff;
		svg {
			color: #fff;
		}
	}
`;

export const UlStyle = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	margin-right: 30px;
	padding: 30px 0;
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
	svg {
		font-size: 2rem;
	}
`;
