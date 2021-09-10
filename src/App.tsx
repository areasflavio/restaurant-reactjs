import React from 'react';

import FoodList from './components/FoodList';
import Header from './components/Header';

import { FoodProvider } from './context/FoodContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />

			<FoodProvider>
				<Header />
				<FoodList />
			</FoodProvider>
		</>
	);
};

export default App;
