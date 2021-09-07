import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<strong>Restaurant ReactJS</strong>

			<button type="button">
				<small>Novo Prato</small>

				<div>
					<FiPlusSquare size={24} />
				</div>
			</button>
		</Container>
	);
};

export default Header;
