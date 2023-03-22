import { createAction } from "@reduxjs/toolkit";

export const getVolume = createAction("@volume/getVolume");
export const setVolume = createAction("@volume/setVolume");
export const clearVolume = createAction("@volume/clearVolume");
export const volumeLoading = createAction("@volume/volumeLoading")