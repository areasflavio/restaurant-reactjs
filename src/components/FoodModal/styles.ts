import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Switch from 'react-switch';

export const Modal = styled(Popup)`
	// use your custom style for ".popup-overlay"
	&-overlay {
		//
	}
	// use your custom style for ".popup-content"
	&-content {
		//
		border: 0;
		border-radius: 0.25rem;
		padding: 2.5rem 2rem;

		background-color: var(--secondary-light);
		color: var(--text-title);

		h1 {
			font-weight: 500;
			font-size: 2rem;
		}

		form {
			display: flex;
			flex-direction: column;

			margin: 2rem 0;

			div {
				display: grid;
				grid-template-columns: 2fr 1fr;
				grid-gap: 0.5rem;
			}

			footer {
				display: flex;
				align-items: flex-end;
				justify-content: space-between;

				margin-top: 1rem;

				> div {
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
`;

export const SubmitButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;

	border: 0;
	border-radius: 0.25rem;

	font-weight: 600;
	color: #fff;

	background: var(--success);

	transition: all 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	small {
		padding: 1rem 1.25rem;

		background: var(--success);
	}

	div.icon-container {
		display: flex;
		margin: 0 auto;
		padding: 1rem;
		border-radius: 0 0.25rem 0.25rem 0;

		background: var(--success-light);
	}
`;

export const ToggleSwitch = styled(Switch).attrs({
	onColor: '#67D66B',
	onHandleColor: '#3ABC4B',
	offColor: '#ddd',
	offHandleColor: '#999',
	handleDiameter: 54,
	uncheckedIcon: false,
	checkedIcon: false,
	boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.6)',
	activeBoxShadow: '0px 0px 1px 10px rgba(0, 0, 0, 0.2)',
	height: 52,
	width: 104,
	borderRadius: 4,
})``;
