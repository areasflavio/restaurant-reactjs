import { createGlobalStyle } from 'styled-components';

import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 :root {
	 	--main: #1e90ff;
		--secondary: #FCC735;
		--secondary-light: #FDDB7E;
    --background: #fff;

		--success: #3ABC4B;
		--success-light: #67D66B;
		--info: #3EDDF9;
		--danger: #FF4B30;

    --header-title: #fff;
    --text-title: #000;
    --text-body: #2B2001;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
		border: 0;
  }
`;
