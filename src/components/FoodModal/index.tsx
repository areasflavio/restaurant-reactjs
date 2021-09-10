import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { FiCheckSquare } from 'react-icons/fi';

import Input from '../Input';

import { useFood } from '../../context/FoodContext';

import { Modal } from './styles';

interface FormData {
	name: string;
	image: string;
	price: string;
	description: string;
}

interface IModalProps {
	trigger: JSX.Element;
}

const FoodModal: React.FC<IModalProps> = ({ trigger }) => {
	const formRef = useRef<FormHandles>(null);
	const { handleAddFood } = useFood();

	const handleSubmit: SubmitHandler<FormData> = data => {
		handleAddFood(data);
	};
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

				<button type="submit">
					<small>New Plate</small>

					<div>
						<FiCheckSquare size={24} />
					</div>
				</button>
			</Form>
		</Modal>
	);
};

export default FoodModal;
