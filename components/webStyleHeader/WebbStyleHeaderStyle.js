import styled, { css } from 'styled-components';

export const WebStyleHeaderStyle = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 40px 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1000;

	.logo {
		position: relative;
		color: #ff5e8e;
		display: inline-block;
		font-size: 3em;
		font-weight: 800;
	}

	@media (max-width: 991px) {
		padding: 20px;

		.toggle {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: 30px;
			top: 50%;
			transform: translateY(-50%);
			width: 30px;
			height: 30px;
			background: #0169b2;
			z-index: 1000;
			border: 0;
			overflow: hidden;
			outline: none;
			cursor: pointer;
			div {
				position: absolute;
				width: 70%;
				height: 2px;
				background: #fff;
				border-radius: 30px;
				transition: transform 0.2s;
			}
			.top-bar {
				top: 30%;
			}
			.middle-bar {
				top: 50%;
				transform: translateY(-50%);
			}
			.bottom-bar {
				bottom: 30%;
			}
		}
		.navigation {
			display: none;
			position: fixed;
			opacity: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #fff;

			justify-content: center;
			align-items: center;
			flex-direction: column;
			li {
				margin: 10px 0;
			}

			&.active {
				display: flex;
			}
		}
	}
`;

export const ToggleBarBtnStyle = styled.button`
	display: none;
	@media (max-width: 991px) {
		${(props) => {
			return (
				props.toggleState &&
				css`
					.top-bar {
						top: 50% !important;
						transform: rotate(45deg);
					}
					.middle-bar {
						transform: translateX(300%) !important;
					}
					.bottom-bar {
						top: 50% !important;
						transform: rotate(135deg);
					}
				`
			);
		}}
	}
`;

export const WebStyleNavStyle = styled.nav`
	.navigation {
		li {
			display: inline-block;
			margin-left: 10px;
			a {
				color: #0169b2;
				font-weight: 600;
				font-size: 1.4em;
				padding: 8px 18px;
				user-select: none;

				&.active {
					background: #0169b2;
					color: #fff;
					border-radius: 30px;
				}
				&:hover {
					background: #0169b2;
					color: #fff;
					border-radius: 30px;
				}
			}
		}
	}
`;
