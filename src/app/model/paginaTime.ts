import { Time } from "./times";

export interface PaginaTime {
  content: Time[],
  pageable: {
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean
    },
    pageSize: number,
    pageNumber: number,
    offset: number,
    paged: boolean,
    unpaged: boolean
  },
  totalPages : number,
    totalElements: number,
    last: boolean,
    size: number,
    number: number,
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
};
