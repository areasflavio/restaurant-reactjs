/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
	handleDeleteFood: (id: number) => void;
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

			toast('The plate was added!', {
				type: 'success',
			});
		} catch (err) {
			console.error(err);

			toast('There was a problem with the operation, please try again.', {
				type: 'error',
			});
		}
	}

	async function handleUpdateFood(food: IFoodData): Promise<void> {
		try {
			if (!confirm('Are you sure you want to change the food?')) {
				return;
			}

			const response = await api.put<IFoodData>(`/foods/${food.id}`, food);

			setFoods(previousFoods =>
				previousFoods.map(previousFood =>
					previousFood.id === food.id ? response.data : previousFood,
				),
			);

			toast('The plate was updated!', {
				type: 'success',
			});
		} catch (err) {
			console.error(err);

			toast('There was a problem with the operation, please try again.', {
				type: 'error',
			});
		}
	}

	async function handleDeleteFood(id: number): Promise<void> {
		try {
			if (!confirm('Are you sure you want to delete the food?')) {
				return;
			}

			await api.delete(`/foods/${id}`);

			setFoods(previousFoods =>
				previousFoods.filter(previousFood => previousFood.id !== id),
			);

			toast('The plate was removed!', {
				type: 'success',
			});
		} catch (err) {
			console.error(err);

			toast('There was a problem with the operation, please try again.', {
				type: 'error',
			});
		}
	}

	return (
		<FoodContext.Provider
			value={{ foods, handleAddFood, handleUpdateFood, handleDeleteFood }}
		>
			{children}

			<ToastContainer />
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
