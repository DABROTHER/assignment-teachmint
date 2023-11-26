import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';
import postSlice from './slices/postSlice';
import countrySlice from './slices/contriesSlice';
import selectedCountrySlice from './slices/selectedContrySlice';

const rootReducer = combineReducers({
  user: userSlice,
  post: postSlice,
  country: countrySlice,
  selectedCountry: selectedCountrySlice,
});

export default rootReducer;
