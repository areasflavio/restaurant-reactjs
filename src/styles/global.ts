import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 :root {
	 	--main: #1e90ff;
		--secondary: #FCC735;
    --background: #fff;

		--success: #87CC1A;
		--success400: #ADE04D;
		--info: #3EDDF9;
		--danger: #FF4B30;

    --text-title: #fff;
    --text-body: #969cb3;
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
