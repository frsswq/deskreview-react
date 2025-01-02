import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* import fonts */
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');

    /* global styles */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'DM Sans', sans-serif;
        font-weight: 300;
        background-color: #ffffff;
        line-height: 1.333;
        letter-spacing: -0.05em;
        height: 300vh;
    }

    main {
        padding: 0 16px;
    }
`;

export default GlobalStyles;
