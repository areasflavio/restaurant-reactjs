import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import {
	Container,
	FoodCard,
	FoodControls,
	FoodEditControl,
	FoodDeleteControl,
} from './styles';

const foodArray = [1, 2, 3, 4, 5, 6, 7, 8];

const FoodList: React.FC = () => {
	return (
		<Container>
			{foodArray.map(food => (
				<FoodCard key={food} available>
					<header>
						<img
							src="https://images.unsplash.com/photo-1618163633808-dbd8a9f658ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80"
							alt="Spaghetti"
						/>
					</header>

					<section>
						<h2>Spaghetti</h2>
						<p>Delicious noodles with vegetables.</p>

						<strong>R$ 19.90</strong>
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

						<div>Disponível</div>
					</footer>
				</FoodCard>
			))}
		</Container>
	);
};

export default FoodList;
