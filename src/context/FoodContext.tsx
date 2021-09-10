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
	handleUpdateFood: (food: IFoodData) => void;
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
			const response = await api.post<IFoodData>('/foods', {
				id: foods.length + 1,
				available: true,
				...food,
			});

			setFoods(previousFoods => [...previousFoods, response.data]);
		} catch (err) {
			console.error(err);
		}
	}

	async function handleUpdateFood(food: IFoodData): Promise<void> {
		console.log(food);
	}

	return (
		<FoodContext.Provider value={{ foods, handleAddFood, handleUpdateFood }}>
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
