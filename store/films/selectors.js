export const getAllFilms = (films) => films.items;
export const getFilmById = (films) => films.itemSelected;
export const isLoadingFilms = (films) => films.isLoading;
export const getTotalFilms = (films) => films.totalItems;
export const getFilmsNextPage = (films) => films.next;
export const getFilmsPreviousPage = (films) => films.previous;
