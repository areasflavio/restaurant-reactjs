import React, { useCallback } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { useFood } from '../../context/FoodContext';

import EditFoodModal from '../FoodModal/EditFoodModal';

import {
	Container,
	FoodCard,
	FoodControls,
	FoodEditControl,
	FoodDeleteControl,
} from './styles';

const FoodList: React.FC = () => {
	const { foods, handleDeleteFood } = useFood();

	const handleDelete = useCallback(
		(id: number) => {
			handleDeleteFood(id);
		},
		[handleDeleteFood],
	);

	return (
		<Container>
			{foods.map(food => (
				<FoodCard key={food.id} available={food.available}>
					<header>
						<img src={food.image} alt={food.name} />
					</header>

					<section>
						<h2>{food.name}</h2>

						<p>{food.description}</p>

						<strong>$ {food.price}</strong>
					</section>

					<footer>
						<FoodControls>
							<EditFoodModal
								editFood={food}
								trigger={
									<FoodEditControl>
										<FiEdit3 size={20} />
									</FoodEditControl>
								}
							/>
							<FoodDeleteControl onClick={() => handleDelete(food.id)}>
								<FiTrash size={20} />
							</FoodDeleteControl>
						</FoodControls>

						<div>{food.available ? 'Available' : 'Unavailable'}</div>
					</footer>
				</FoodCard>
			))}
		</Container>
	);
};

export default FoodList;
