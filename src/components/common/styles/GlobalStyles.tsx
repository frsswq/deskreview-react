import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* import fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');

    /* global styles */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #ffffff;
        line-height: 1.6;
        letter-spacing: -0.05em;
    }

    main {
        padding: 0 16px;
    }
`;

export default GlobalStyles;
