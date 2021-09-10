import styled from 'styled-components';
import Popup from 'reactjs-popup';

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

			button {
				margin-top: 3rem;
				align-self: flex-end;

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

				div {
					display: flex;
					margin: 0 auto;
					padding: 1rem;
					border-radius: 0 0.25rem 0.25rem 0;

					background: var(--success-light);
				}
			}
		}
	}
`;
