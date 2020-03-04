import { createGlobalStyle, css } from '@nfront/global-styles'
import StyledHeader, { StyledNavItem } from './HeaderStyles'
import StyledFooter from './FooterStyles'

const StyledRoot = css`
  :root {
    --dark: #1f1f1f;
    --darker: #141414;
    --red: #ec1c24;
    --off-white: #e1e1e1;
    --gray: #999;
    --light-gray: #bbb;
    --small-font: 1.2rem;
    --regular-font: 1.4rem;
    --large-font: 1.7rem;
    --max-width: 118rem;
    --focus-shadow: 0 0 2px 1px var(--light-gray);
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    /* outline: 1px solid red; */
  }
`

const StyledHtml = css`
  html,
  body {
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: var(--large-font);
  }
`
// temporary because styled components causes flicker
const GlobalStyles = createGlobalStyle`
  ${StyledRoot}
  ${StyledHtml}
  ${StyledHeader}
  ${StyledNavItem}
  ${StyledFooter}
`

export default GlobalStyles
