import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import AddFoodModal from '../FoodModal/AddFoodModal';

import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<strong>Restaurant ReactJS</strong>

			<AddFoodModal
				trigger={
					<button type="button">
						<small>New Plate</small>

						<div>
							<FiPlusSquare size={24} />
						</div>
					</button>
				}
			/>
		</Container>
	);
};

export default Header;
