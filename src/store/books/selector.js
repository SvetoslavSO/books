import { createSelector } from '@reduxjs/toolkit'

const selectBooks = (store) => store.books;

export const booksSelector = createSelector(selectBooks, (booksStore) => booksStore.books);
export const loadingSelector = createSelector(selectBooks, (booksStore) => booksStore.isLoading);
export const requestedSelector = createSelector(selectBooks, (booksStore) => booksStore.requested);
export const currentChunkSelector = createSelector(selectBooks, (booksStore) => booksStore.currentChunk);
export const parametersSelector = createSelector(selectBooks, (booksStore) => booksStore.parameters);
export const isEndOfChunksSelector = createSelector(selectBooks, (booksStore) => booksStore.isChunksEnded);
export const numberOfBooksSelector = createSelector(selectBooks, (booksStore) => booksStore.numberOfBooks)