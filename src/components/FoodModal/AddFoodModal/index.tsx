import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiCheckSquare } from 'react-icons/fi';

import Input from '../../Input';

import { useFood } from '../../../context/FoodContext';

import { Modal, SubmitButton } from '../styles';

interface FormData {
	name: string;
	image: string;
	price: string;
	description: string;
}

interface IModalProps {
	trigger: JSX.Element;
}

interface Errors {
	[key: string]: string;
}

const AddFoodModal: React.FC<IModalProps> = ({ trigger }) => {
	const formRef = useRef<FormHandles>(null);

	const { handleAddFood } = useFood();

	const handleSubmit = useCallback(
		async (data: FormData) => {
			try {
				const schema = Yup.object().shape({
					name: Yup.string().required('Name is required'),
					image: Yup.string().required('Image URL is required'),
					price: Yup.string().required('Price is required'),
					description: Yup.string().required('Description is required'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				handleAddFood(data);
			} catch (err) {
				const validationErrors: Errors = {};

				if (err instanceof Yup.ValidationError) {
					err.inner.forEach(error => {
						if (error.path) validationErrors[error.path] = error.message;
					});
				}

				formRef.current?.setErrors(validationErrors);
			}
		},
		[handleAddFood],
	);

	return (
		<Modal trigger={trigger} modal>
			<h1>New Plate</h1>

			<Form ref={formRef} onSubmit={handleSubmit}>
				<Input
					name="image"
					type="text"
					label="Image URL"
					placeholder="Paste the link here"
				/>

				<div>
					<Input
						name="name"
						type="text"
						label="Food name"
						placeholder="Ex.: Carbonara"
					/>
					<Input name="price" type="text" label="Price" placeholder="$" />
				</div>

				<Input
					name="description"
					type="text"
					label="Description"
					placeholder=""
				/>

				<footer>
					<div />

					<SubmitButton type="submit">
						<small>New Plate</small>

						<div className="icon-container">
							<FiCheckSquare size={24} />
						</div>
					</SubmitButton>
				</footer>
			</Form>
		</Modal>
	);
};

export default AddFoodModal;
