// Countries
export const countriesReducer = (state = { countries: [], loading: false, error: null }, action) => {
    switch(action.type) {
      case 'GET_COUNTRIES_REQUEST':
        return { ...state, loading: true };
      case 'GET_COUNTRIES_SUCCESS':
        return { ...state, loading: false, countries: action.payload };
      case 'GET_COUNTRIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'GET_REGION_SUCCESS':
        return { ...state, loading: false, countries: action.payload };
      default:
        return state;
    }
  };
  
  // Mihat Country reducer
  export const countryReducer = (state = { country: {}, loading: false, error: null }, action) => {
    switch(action.type) {
      case 'GET_COUNTRY_REQUEST':
        return { ...state, loading: true };
      case 'GET_COUNTRY_SUCCESS':
        return { ...state, loading: false, country: action.payload };
      case 'GET_COUNTRY_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // Search reducer
  export const textReducer = (state = { text: '' }, action) => {
    switch(action.type) {
      case 'SEARCH_TEXT':
        return { ...state, text: action.payload };
      default:
        return state;
    }
};