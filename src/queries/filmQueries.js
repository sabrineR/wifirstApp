import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query Query {
    allFilms {
      films {
        id
        title
        producers
        releaseDate
        director
        vehicleConnection {
          totalCount
        }
      }
    }
  }
`;

export const GET_FILM = gql`
  query Film($id: ID!) {
    film(id: $id) {
        id
        title
      vehicleConnection {
        vehicles {
          model
          name
        }
      }
    }
  }
`;
