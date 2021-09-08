import React from 'react';

import FoodList from './components/FoodList';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />

			<Header />
			<FoodList />
		</>
	);
};

export default App;
