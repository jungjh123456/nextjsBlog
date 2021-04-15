import styled, { keyframes } from 'styled-components';

const typing = keyframes`
	100% {
		/* left: 200%; */
	}
	50% {
		left 100%;
	}
	0% {
		bottom: 100%;
	}

`;
const typing1 = keyframes`
	100% {
		top: 100%;
		left: 150%;
	}
	50% {
		top: 100%;
	}
	0% {
		top: 100%;
	}

`;

const typing2 = keyframes`
	100% {
		transform: scale(0);
	}
	

`;

export const BackSectionDiv = styled.div`
	/* width: 100%; */
	/* width: 300px; */
	min-height: 1500px;
	/* border-radius: 50%; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* border: 1px solid rgba(0, 0, 0, 0.2); */
	/* align-items: center; */
	/* padding-left: 50px; */
	margin-left: 50px;
	/* object-fit: 100%; */
	margin-top: 80px;
	h1 {
		width: 140px;
		font-size: 5rem;
		font-weight: 800;
		position: relative;
		letter-spacing: 5px;
		color: #000;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			height: 90%;
			width: 100%;
			z-index: 0;
			/* border-left: 2px solid #fc6d6d; */
			background-color: rgb(191, 204, 207);
			box-shadow: 10px 1px 15px #000;
			animation: ${typing1} 1.5s steps(20) infinite;
		}
	}

	span {
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: 5px;
		color: #000;
		shape-outside: 1px;
		z-index: 1;
	}
	/* background-color: red; */
	min-height: 100%;
`;
