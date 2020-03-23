import styled from 'styled-components'
import { BackgroundImage } from '../components/common'

const ComicDetails = styled.div`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

ComicDetails.BackgroundImage = BackgroundImage

ComicDetails.Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  margin-top: 10rem;
  display: flex;
  img {
    width: 30%;
  }
`

ComicDetails.TextContainer = styled.div`
  width: 70%;
  color: white;
  padding-left: 8rem;
  h3 {
    margin: 0;
    font-size: 4rem;
  }
  button {
    margin-left: 2rem;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 2rem;
    font-size: var(--large-font);
    background: transparent;
    color: #5dade2;
    border: 2px solid #5dade2;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &:hover {
      color: white;
      background: #5dade2;
    }
  }
`

ComicDetails.Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

ComicDetails.MetaItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 50rem;
`

ComicDetails.MetaItem = styled.li`
  margin-top: 1.5rem;
  max-width: 30rem;
  strong {
    font-size: 2.5rem;
  }
  p {
    margin: 1rem 0;
    font-weight: lighter;
  }
`

export default ComicDetails
