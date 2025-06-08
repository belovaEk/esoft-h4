import { createContext, useContext, useReducer, useMemo } from 'react';

const AppContext = createContext();

const initialState = {
  books: [],
  favorites: [],
  searchQuery: '',
  filters: {
    authors: [],
    onlyFavorites: false,
  },
};

function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter((id) => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Оптимизация: мемоизируем методы, чтобы не создавать их при каждом рендере
  const value = useMemo(() => ({
    ...state,
    toggleFavorite: (id) => dispatch({ type: 'TOGGLE_FAVORITE', payload: id }),
    setSearchQuery: (query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query }),
    setFilters: (filters) => dispatch({ type: 'SET_FILTERS', payload: filters }),
  }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}