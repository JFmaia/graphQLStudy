import { gql } from 'apollo-server';

// Criando uma lista de filtros pra chamadas plurais, para assim ordenar, limitar e etc..
export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFiltersOrder
    _start: Int
    _limit: Int
  }

  enum ApiFiltersOrder {
    ASC
    DESC
  }
`;
