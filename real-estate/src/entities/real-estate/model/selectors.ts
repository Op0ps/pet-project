import type { RootState } from '../../../shared/types/index';

export const selectEstatePart = (state: RootState) =>
    state.realEstate.estatePart;
export const selectEstates = (state: RootState) => state.realEstate.estates;
export const selectLoading = (state: RootState) => state.realEstate.isLoading;
export const selectError = (state: RootState) => state.realEstate.isError;
export const selectLanguage = (state: RootState) => state.realEstate.language;
