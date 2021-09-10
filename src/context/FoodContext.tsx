import React, { createContext, useState, useContext, useEffect } from 'react';

import api from '../services/api';

interface IFoodData {
	id: number;
	name: string;
	image: string;
	price: string;
	description: string;
	available: boolean;
}

interface FoodContextData {
	foods: IFoodData[];
	handleAddFood: (food: Omit<IFoodData, 'id' | 'available'>) => void;
}

const FoodContext = createContext<FoodContextData>({} as FoodContextData);

const FoodProvider: React.FC = ({ children }) => {
	const [foods, setFoods] = useState<IFoodData[]>([]);

	useEffect(() => {
		api.get('/foods').then(response => setFoods(response.data));
	}, []);

	async function handleAddFood(
		food: Omit<IFoodData, 'id' | 'available'>,
	): Promise<void> {
		try {
			console.log(food);

			// await api.post<IFoodData>('/foods', {
			// 	id: foods.length + 1,
			// 	available: true,
			// 	...food,
			// });
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<FoodContext.Provider value={{ foods, handleAddFood }}>
			{children}
		</FoodContext.Provider>
	);
};

function useFood(): FoodContextData {
	const context = useContext(FoodContext);

	if (!context) {
		throw new Error('useFood must be used within an FoodProvider');
	}

	return context;
}

export { FoodProvider, useFood };
