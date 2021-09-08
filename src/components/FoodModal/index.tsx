import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Modal } from './styles';

interface IModalProps {
	trigger: JSX.Element;
}

const FoodModal: React.FC<IModalProps> = ({ trigger }) => {
	return (
		<Modal trigger={trigger} modal>
			<h1>Novo Prato</h1>

			<form>
				<input type="text" placeholder="Cole o link aqui" />

				<div>
					<input type="text" placeholder="Ex.: Carbonara" />
					<input type="text" placeholder="R$" />
				</div>

				<input type="text" placeholder="" />

				<button type="button">
					<small>Novo Prato</small>

					<div>
						<FiCheckSquare size={24} />
					</div>
				</button>
			</form>
		</Modal>
	);
};

export default FoodModal;
