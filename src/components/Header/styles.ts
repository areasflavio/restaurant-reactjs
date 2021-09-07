import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 14rem;
	width: 100%;

	padding: 0 12rem 8rem;

	background: #1e90ff;

	strong {
		font-size: 1.5rem;

		color: var(--text-title);
	}

	button {
		display: flex;
		align-items: center;

		background: transparent;
		color: var(--text-title);

		transition: all 0.2s;

		&:hover {
			opacity: 0.9;
		}

		small {
			padding: 1rem 1.25rem;
			border-radius: 0.25rem 0 0 0.25rem;

			background: var(--success);
		}

		div {
			display: flex;
			margin: 0 auto;
			padding: 1rem;
			border-radius: 0 0.25rem 0.25rem 0;

			background: var(--success400);
		}
	}
`;
