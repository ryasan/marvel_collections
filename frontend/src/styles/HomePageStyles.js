import styled from 'styled-components'

const StyledHomePage = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    border-radius: 3px;
    padding: 1rem 0;
    width: 15rem;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--red);
    font-size: var(--large-font);
    border: 2px solid var(--red);
    cursor: pointer;
    &:hover {
      color: var(--dark);
      border-color: var(--dark);
    }
  }
`
export default StyledHomePage
