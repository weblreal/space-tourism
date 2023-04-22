import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: 'Bellefair';
    font-weight: normal;
    font-style: normal;
    src: url('../public/assets/fonts/Bellefair-Regular.ttf') format('ttf')
}

@font-face{
    font-family: 'BarlowCondensed';
    font-weight: normal;
    font-style: normal;
    src: url('../public/assets/fonts/BarlowCondensed-Regular.ttf') format('ttf')
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
}

h1 {
    font-size: 150px;
}

h2 {
    font-size: 100px
}

h3 {
   font-size: 56px;
}

h4 {
    font-size: 32px
}

h5 {
    font-size: 28px
}
`;

export default GlobalStyle;
