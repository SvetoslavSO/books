import { createReducer } from '@reduxjs/toolkit';
import { 
  setBooks,
  setCurrentChunk,
  setLoading,
  setRequested,
  setCurrentParameters,
  setEndOfChunks,
  setNumberOfBooks,
  clearBooks
} from './actions';

const booksStore = {
  books: [],
  isLoading: false,
  currentChunk: 0,
  requested: false,
  parameters: {
    type: '',
    text: '',
    sort: ''
  },
  isChunksEnded: false,
  numberOfBooks: 0
}

export const booksReducer = createReducer(booksStore, {
  [setBooks.type] : (store, action) => {
    action.payload.forEach((item) => {
      store.books.push({
        id: item.id,
        title: item.volumeInfo.title,
        categories: item.volumeInfo.categories,
        image: item.volumeInfo.imageLinks ? 
               item.volumeInfo.imageLinks.thumbnail ? 
               item.volumeInfo.imageLinks.thumbnail : '' 
          : '',
        authors: item.volumeInfo.authors
      })
    })
  },
  [setCurrentChunk.type] : (store, action) => {
    store.currentChunk = action.payload;
  },
  [setRequested.type] : (store) => {
    store.requested = true
  },
  [setLoading.type] : (store, action) => {
    store.isLoading = action.payload
  },
  [setCurrentParameters.type] : (store, action) => {
    store.parameters.type = action.payload.type;
    store.parameters.text = action.payload.text;
    store.parameters.sort = action.payload.sort
  },
  [setEndOfChunks.type] : (store, action) => {
    store.isChunksEnded = action.payload
  },
  [setNumberOfBooks.type] : (store, action) => {
    store.numberOfBooks = action.payload
  },
  [clearBooks.type] : (store) => {
    store.books = []
  }
})