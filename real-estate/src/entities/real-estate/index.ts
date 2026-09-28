export { RealEstatePreview } from './ui/RealEstatePreview/RealEstatePreview';
export { RealEstateDetails } from './ui/RealEstateDetails/RealEstateDetails';

export { realEstateApi } from './model/realEstateApi';
export {
    setEstatePart,
    addEstates,
    setError,
    setLoading,
    realEstateSlice,
    setLanguage,
} from './model/realEstateSlice';
export {
    selectEstates,
    selectEstatePart,
    selectError,
    selectLoading,
    selectLanguage,
} from './model/selectors';
