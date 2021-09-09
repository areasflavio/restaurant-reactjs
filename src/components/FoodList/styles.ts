import styled, { css } from 'styled-components';

interface IFoodCardProps {
	available: boolean;
}

export const Container = styled.main`
	display: grid;
	/* grid-auto-columns: minmax(16rem, 1fr); */
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	grid-gap: 2rem;

	width: 100%;
	height: 60rem;

	margin-top: -5rem;
	padding: 0 12rem 8rem;
`;

export const FoodCard = styled.div<IFoodCardProps>`
	display: flex;
	flex-direction: column;

	list-style: none;

	border-radius: 0.25rem;

	background: var(--secondary-light);

	${props =>
		!props.available &&
		css`
			opacity: 0.4;
		`}

	transition: all .2s;

	&:hover {
		transform: scale(1.05, 1.05);
	}

	img {
		max-width: 100%;
		max-height: 30rem;
		object-fit: contain;

		border-radius: 0.25rem 0.25rem 0 0;

		background: var(--background);
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

		margin-top: auto;
		padding: 1rem 1.5rem;
		border-radius: 0 0 0.25rem 0.25rem;

		background: var(--secondary);
	}
`;

export const FoodControls = styled.div`
	display: flex;

	gap: 0.5rem;
`;

export const FoodEditControl = styled.button`
	display: flex;

	padding: 0.5rem;
	border-radius: 0.25rem;

	background: var(--background);

	transition: all 0.2s;

	&:hover {
		color: var(--secondary);
	}
`;

export const FoodDeleteControl = styled.button`
	display: flex;

	padding: 0.5rem;
	border-radius: 0.25rem;

	background: var(--background);

	transition: all 0.2s;

	&:hover {
		color: var(--secondary);
	}
`;
