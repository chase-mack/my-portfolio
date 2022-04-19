import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        overflow-x: clip;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Cormorant', serif;
        @media (max-width: 700px) {
            ::-webkit-scrollbar {
                display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    }

    #headshot {
        max-width: 22rem;
        border-radius: 5px;
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

    .slide-up {
        transform: translateY(14px);
    }
    
    .slide-down {
        transform: translateY(350%);
    }

    label {
        font-size: 1.5rem;
    }
`;

export default GlobalStyle;