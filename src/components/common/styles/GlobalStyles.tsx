import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  
    /* colours */
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
    
    /* font sizes */
    :root {
        --text-xs: 0.75rem;
        --text-sm: 0.875rem;
        --text-base: 1rem;
        --text-lg: 1.125rem;
        --text-xl: 1.25rem;
        --text-2xl: 1.375rem;
        --text-3xl: 1.5rem;
    }
    
    /* others */
    :root {
        --max-w: 600px;
    }

    /* global styles */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #ffffff;
        overflow-y: scroll;
        scrollbar-gutter: stable;
    }

    p, li {
        font-family: 'DM Sans', sans-serif;
        font-weight: 300;
        font-size: var(--text-xl);
        line-height: 1.333;
        letter-spacing: -0.025em;
        
        @media (width <= 768px) {
            font-size: var(--text-base);
        }      
    }

    li {
        list-style-type: none;
    }

    main {
        padding: 0 16px;
    }

    /* scrollbar */
    body::-webkit-scrollbar {
        width: 0.8vw;
    }
 
    body::-webkit-scrollbar-track {
        background-color: rgb(var(--desk-gray-300));
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: rgba(var(--desk-gray-500), 0.8);
        border-radius: 1em;
    

        &:hover {
            background-color: rgba(var(--desk-gray-500), 1);
        }
    }
`;

export default GlobalStyles;
