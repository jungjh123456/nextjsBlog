import styled from 'styled-components';

export const WebStyleSectionStyle = styled.section`
	position: relative;
	min-height: 100vh;
	width: 100%;
	border: 1px solid;
	padding: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	.mosque {
		position: absolute;
		bottom: 0;
		right: 0;
		max-width: 700px;
	}

	@media (max-width: 991px) {
		padding: 150px 20px;
		.mosque {
			max-width: 400px;
			opacity: 0.4;
		}
	}
`;

export const TextBox = styled.div`
	position: relative;
	max-width: 550px;
	@media (max-width: 991px) {
		h2 {
			font-size: 2.5em !important;
		}
		p {
			font-size: 1em !important;
		}
	}
	h2 {
		color: #0169b2;
		font-size: 3.5em;
		margin-bottom: 10px;
		line-height: 1.2em;
		font-weight: 700;
	}
	p {
		font-size: 1.2em;
		color: #333;
	}

	a {
		display: inline-block;
		margin-top: 20px;
		padding: 15px 30px;
		background: #ff5e8e;
		font-size: 1.2em;
		color: #fff;
		border-radius: 40px;
		font-weight: 700;
		letter-spacing: 1px;
		text-decoration: none;
	}
`;

export const SciUl = styled.ul`
	position: absolute;
	bottom: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	li {
		a {
			position: relative;
			margin-right: 15px;
			width: 50px;
			height: 50px;
			display: inline-block;
			background-color: #0169b2;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.2s ease-in-out;
			img {
				width: 100%;
				filter: invert(2);
				transform: scale(0.5);
			}
			&:hover {
				background: #ff5e8e;
				transform: translateY(-10px);
			}
		}
	}
`;
