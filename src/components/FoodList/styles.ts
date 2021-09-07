import styled from 'styled-components';

export const Container = styled.main`
	display: grid;
	/* grid-auto-columns: minmax(16rem, 1fr); */
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	grid-gap: 2rem;

	width: 100%;

	margin-top: -5rem;
	padding: 0 12rem 8rem;
`;

export const Food = styled.li`
	display: flex;
	flex-direction: column;

	list-style: none;

	border-radius: 0.25rem;

	background: var(--secondary-light);

	img {
		max-width: 100%;
		object-fit: cover;

		border-radius: 0.25rem 0.25rem 0 0;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 1rem 1.5rem;

		h2 {
			color: var(--text-title);
		}

		p {
			margin: 1rem 0 2rem;

			color: var(--text-body);
		}

		strong {
			margin-top: auto;

			font-size: 1.5rem;
		}
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 1rem 1.5rem;
		border-radius: 0 0 0.25rem 0.25rem;

		background: var(--secondary);
	}
`;

export const FoodControls = styled.div`
	display: flex;

	gap: 0.5rem;
`;

export const FoodEditControl = styled.div`
	display: flex;

	padding: 0.5rem;
	border-radius: 0.25rem;

	background: var(--background);
`;

export const FoodDeleteControl = styled.div`
	display: flex;

	padding: 0.5rem;
	border-radius: 0.25rem;

	background: var(--background);
`;
