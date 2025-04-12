import {API} from "../Api/api";

// Country-neri actions
export const getCountriesThunk = () => async (dispatch) => {
  dispatch({ type: 'GET_COUNTRIES_REQUEST' });
  try {
    const res = await API.getAll();
    dispatch({ type: 'GET_COUNTRIES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_COUNTRIES_FAILURE', payload: error.message });
  }
};

export const getRegionThunk = (region) => async (dispatch) => {
  dispatch({ type: 'GET_COUNTRIES_REQUEST' });
  try {
    const res = await API.getRegion(region);
    dispatch({ type: 'GET_REGION_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_COUNTRIES_FAILURE', payload: error.message });
  }
};

// Mi hat Country action
export const getCountryThunk = (name) => async (dispatch) => {
  dispatch({ type: 'GET_COUNTRY_REQUEST' });
  try {
    const res = await API.getCountry(name);
    dispatch({ type: 'GET_COUNTRY_SUCCESS', payload: res.data[0] });
  } catch (error) {
    dispatch({ type: 'GET_COUNTRY_FAILURE', payload: error.message });
  }
};

// Search action
export const getSearchActionCreator = (text) => ({
  type: 'SEARCH_TEXT',
  payload: text
});