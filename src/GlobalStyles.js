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

    .hovered {
        transition: all .2s ease;
    }

    .hovered:hover {
        box-shadow: 1px 1px rgb(40, 40, 40),
        2px 2px rgb(40, 40, 40),
        3px 3px rgb(40, 40, 40);
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
`;

export default GlobalStyle;