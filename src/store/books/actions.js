import { createAction } from "@reduxjs/toolkit";

export const getBooks = createAction("@books/getBooks");
export const setBooks = createAction("@books/setBooks");
export const getChunk = createAction("@books/getChunk");
export const setEndOfChunks = createAction("@books/setEndOfChunks");
export const setCurrentChunk = createAction("@books/setCurrentChunk");
export const setRequested = createAction("@books/setRequested");
export const setLoading = createAction("@books/setLoading");
export const setCurrentParameters = createAction("@books/setCurrentParameters");
export const setNumberOfBooks = createAction("@books/setNumberOfBooks");
export const clearBooks = createAction("@books/clearBooks");