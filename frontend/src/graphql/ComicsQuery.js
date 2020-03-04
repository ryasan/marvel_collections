import gql from 'graphql-tag'
import { COMIC_FRAGMENT } from './Fragments'

export const ALL_COMICS = gql`
  query AllComics($orderBy: String!, $page: Int!) {
    comics(orderBy: $orderBy, page: $page) {
      totalCount
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`

export const COMIC_TITLE_STARTS_WITH = gql`
  query comicTitleStartsWith($orderBy: String!, $page: Int!, $search: String!) {
    comicTitleStartsWith(orderBy: $orderBy, page: $page, search: $search) {
      totalCount
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`

export const COMICS_BY_CHARACTER = gql`
  query comicsByCharacter($orderBy: String!, $page: Int!, $charId: ID!) {
    comicsByCharacter(orderBy: $orderBy, page: $page, charId: $charId) {
      totalCount
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`