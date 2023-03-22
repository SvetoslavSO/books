import { createSelector } from '@reduxjs/toolkit'

const selectVolume = (store) => store.volume;

export const volumeSelector = createSelector(selectVolume, (volumeStore) => volumeStore.volume);
export const volumeLoadingSelector = createSelector(selectVolume, (volumeStore) => volumeStore.volumeLoading);