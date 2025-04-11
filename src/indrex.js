import Earth from "./Earth/Earth";
import SearchCountries from "./SearchCountries/SearchCountries";
import SearchBox from "./SearchBox/SearchBox";
import SearchInput from "./SearchInput/SearchInput";


import { API } from "../pages";
import { getSearchActionCreator } from "../store/reducers/textReducer";
import { getSearchCountryActionCreator } from "../store/reducers/searchCountriesReducer";
import { getSearchCountryThunk } from "../store/reducers/searchCountriesReducer";

export {API, getSearchCountryActionCreator, getSearchActionCreator, getSearchCountryThunk}
export {Earth, SearchCountries, IoCloseCircleOutline, SearchBox, SearchInput}