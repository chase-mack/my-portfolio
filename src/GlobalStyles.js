import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Cormorant', serif;
        @media (max-width: 660px) {
            ::-webkit-scrollbar {
                display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    }

    #headshot {
        height: 20rem;
        width: 20rem;
        border-radius: 5px;
        margin: 1rem 0;
    }
`;

export default GlobalStyle;