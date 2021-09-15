import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
	name: string;
	label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const { fieldName, defaultValue, registerField, error } = useField(name);

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);

		setIsFilled(!!inputRef.current?.value);
	}, []);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef,
			getValue: ref => {
				return ref.current.value;
			},
			setValue: (ref, value) => {
				ref.current.value = value;
			},
			clearValue: ref => {
				ref.current.value = '';
			},
		});
	}, [fieldName, registerField]);

	return (
		<Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
			{label && <label htmlFor={fieldName}>{label}</label>}

			<input
				id={fieldName}
				ref={inputRef}
				defaultValue={defaultValue}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				{...rest}
			/>

			{error && <span>{error}</span>}
		</Container>
	);
};

export default Input;
