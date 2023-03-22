import { createReducer } from '@reduxjs/toolkit';
import { 
  setBooks,
  setCurrentChunk,
  setLoading,
  setRequested,
  setCurrentParameters,
  setChunk,
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
    for(let i=0; i<action.payload.length; i++) {
      store.books.push({
        id: action.payload[i].id,
        title: action.payload[i].volumeInfo.title,
        categories: action.payload[i].volumeInfo.categories,
        image: action.payload[i].volumeInfo.imageLinks ? 
          action.payload[i].volumeInfo.imageLinks.thumbnail ? 
          action.payload[i].volumeInfo.imageLinks.thumbnail : '' 
          : '',
        authors: action.payload[i].volumeInfo.authors
      })
    }
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
  [setChunk.type] : (store, action) => {
    for(let i=0; i<action.payload.length; i++) {
      store.books.push({
        id: action.payload[i].id,
        title: action.payload[i].volumeInfo.title,
        categories: action.payload[i].volumeInfo.categories,
        image: action.payload[i].volumeInfo.imageLinks ?
          action.payload[i].volumeInfo.imageLinks.thumbnail ?
          action.payload[i].volumeInfo.imageLinks.thumbnail : ''
          : '',
        authors: action.payload[i].volumeInfo.authors
      })
    }
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