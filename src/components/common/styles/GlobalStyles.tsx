import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* import fonts */
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');

    /* global styles */
    :root {
        --desk-gray-300: 234, 236, 236;
        --desk-gray-500: 187, 189, 191;
        --desk-gray-700: 52, 53, 53;
        --desk-blue: 46, 89, 169;
        --desk-brown: 87, 74, 67;
        --desk-orange: 227, 108, 42;
        --desk-white: 255, 255, 255;
        --desk-black: 5, 5, 5;
    }

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
