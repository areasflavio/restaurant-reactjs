import React, { useCallback, useRef, useState } from 'react';
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

const EditFoodModal: React.FC<IModalProps> = ({ trigger, editFood }) => {
	const formRef = useRef<FormHandles>(null);

	const [isAvailable, setIsAvailable] = useState(editFood.available);

	const { handleUpdateFood } = useFood();

	const handleSubmit = useCallback(
		async (data: Omit<IFoodData, 'id'>) => {
			handleUpdateFood({ id: editFood.id, ...data });
		},
		[editFood.id, handleUpdateFood],
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
					<ToggleSwitch onChange={handleAvailability} checked={isAvailable} />

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
