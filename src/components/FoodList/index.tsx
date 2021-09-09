import React, { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import {
	Container,
	FoodCard,
	FoodControls,
	FoodEditControl,
	FoodDeleteControl,
} from './styles';

interface IFoodData {
	id: number;
	name: string;
	image: string;
	price: string;
	description: string;
	available: boolean;
}

const FoodList: React.FC = () => {
	const [foods, setFoods] = useState<IFoodData[]>([]);

	useEffect(() => {
		api.get('/foods').then(response => setFoods(response.data));
	}, []);

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
							<FoodEditControl>
								<FiEdit3 size={20} />
							</FoodEditControl>
							<FoodDeleteControl>
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
