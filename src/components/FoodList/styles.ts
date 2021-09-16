import styled, { css } from 'styled-components';

interface IFoodCardProps {
	isAvailable: boolean;
}

interface IAvailabilityProps {
	isAvailable: boolean;
}

export const Container = styled.main`
	display: grid;
	/* grid-auto-columns: minmax(16rem, 1fr); */
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	grid-gap: 2rem;

	width: 100%;
	height: 100%;

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
		!props.isAvailable &&
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

		height: 100%;

		h2 {
			color: var(--text-title);
			margin-bottom: 1rem;
		}

		p {
			margin: 0 0 2rem;
			margin-top: auto;

			color: var(--text-body);
		}

		strong {
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
		color: var(--danger);
	}
`;

export const Availability = styled.strong<IAvailabilityProps>`
	display: flex;

	padding: 0.5rem;
	border-radius: 0.25rem;

	background: var(--background);

	${props =>
		!props.isAvailable
			? css`
					color: var(--danger);
			  `
			: css`
					color: var(--success);
			  `}
`;
