import { createContext, useContext, useReducer, useMemo } from 'react';
import booksData from '/src/data/books.json'

const AppContext = createContext();

const getInitialState = () => {
  const savedFavorites = localStorage.getItem('bookFavorites');
  return{
    books: booksData,
    favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
    searchQuery: '',
    filters: {
      authors: [],
      onlyFavorites: false,
    }

  }
};


const initialState = getInitialState();

function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const newFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((id) => id !== action.payload)
        : [...state.favorites, action.payload];
      
      // Сохраняем в localStorage
      localStorage.setItem('bookFavorites', JSON.stringify(newFavorites));
      
      return {
        ...state,
        favorites: newFavorites
      };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case 'DELETE_FAVORITE':
      localStorage.removeItem('bookFavorites');
      return {...state, favorites: []}
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
    deleteFavorite: () => dispatch({type: 'DELETE_FAVORITE'})
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