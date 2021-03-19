import { ActionCharacters } from './charactersActions';

const initialState = {
  charactersData: [],
  currentCharacters: [],
  currentPage: 1,
  charactersPerPage: 10,
  character: null,
  error: '',
};

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionCharacters.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        // isLoadingUserList: true,
      };
    case ActionCharacters.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersData: payload,
      };
    case ActionCharacters.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case ActionCharacters.GET_CHARACTERS_FULFILL:
      return {
        ...state,
        // isLoadingUserList: false,
      };
    case ActionCharacters.SET_CHARACTERS_BY_CURRENT_PAGE:
      return {
        ...state,
        currentCharacters: payload,
      };
    case ActionCharacters.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case ActionCharacters.SET_CHARACTER:
      return {
        ...state,
        character: payload,
      };
    default:
      return initialState;
  }
};

export default charactersReducer;
