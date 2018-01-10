export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
export const FETCH_AUTHORS_ERROR = 'FETCH_AUTHORS_ERROR';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';

export const fetchAuthors = () => ({ type: FETCH_AUTHORS });


export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const RECORD_SEARCH = 'RECORD_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';

export const updateSearch = search => ({ type: UPDATE_SEARCH, payload: search });
export const resetSearch = () => ({ type: RESET_SEARCH });