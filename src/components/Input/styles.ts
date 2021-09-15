import styled, { css } from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
}

export const Container = styled.section<ContainerProps>`
	display: flex;
	flex-direction: column;

	label {
		margin: 0.5rem 0;
	}

	input {
		flex: 1;
		width: 100%;

		border-radius: 0.25rem;
		padding: 1rem 0.5rem;

		border: 2px solid var(--secondary-light);

		${props =>
			props.isErrored &&
			css`
				border-color: var(--danger);
			`}

		${props =>
			props.isFocused &&
			css`
				border-color: var(--secondary);
				color: var(--secondary);
			`}

		${props =>
			props.isFilled &&
			css`
				color: var(--secondary);
			`}
	}

	span {
		font-size: 0.625rem;
		color: var(--danger);
	}
`;
