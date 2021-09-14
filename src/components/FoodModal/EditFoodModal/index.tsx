import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiCheckSquare } from 'react-icons/fi';

import Input from '../../Input';

import { useFood } from '../../../context/FoodContext';

import { Modal, SubmitButton, ToggleSwitch } from '../styles';

interface IFoodData {
	id: number;
	name: string;
	image: string;
	price: string;
	description: string;
	available: boolean;
}

interface IModalProps {
	trigger: JSX.Element;
	editFood: IFoodData;
}

interface Errors {
	[key: string]: string;
}

const EditFoodModal: React.FC<IModalProps> = ({ trigger, editFood }) => {
	const formRef = useRef<FormHandles>(null);

	const [isAvailable, setIsAvailable] = useState(editFood.available);

	const { handleUpdateFood } = useFood();

	const handleSubmit = useCallback(
		async (data: Omit<IFoodData, 'id' | 'available'>) => {
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

				handleUpdateFood({ id: editFood.id, available: isAvailable, ...data });
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
		[editFood.id, handleUpdateFood, isAvailable],
	);

	const handleAvailability = useCallback(checked => {
		setIsAvailable(checked);
	}, []);

	return (
		<Modal trigger={trigger} modal>
			<h1>Edit Plate</h1>

			<Form ref={formRef} initialData={editFood} onSubmit={handleSubmit}>
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
					<div>
						<span>Available</span>
						<ToggleSwitch onChange={handleAvailability} checked={isAvailable} />
					</div>

					<SubmitButton type="submit">
						<small>Edit Plate</small>

						<div className="icon-container">
							<FiCheckSquare size={24} />
						</div>
					</SubmitButton>
				</footer>
			</Form>
		</Modal>
	);
};

export default EditFoodModal;
