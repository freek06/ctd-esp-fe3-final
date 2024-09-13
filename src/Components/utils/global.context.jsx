import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer } from './reducer'; // Asegúrate de que la ruta es correcta

const initialState = {
  theme: "light",
  api: [],
  favs: [],
  loading: true,
  error: null,
};

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localFavs = localStorage.getItem('localFavs');
    if (localFavs) {
      dispatch({ type: "LOCALSTORAGE", payload: JSON.parse(localFavs) });
    } else {
      localStorage.setItem('localFavs', '[]');
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        dispatch({ type: "API_RESPONSE", payload: response.data });
      } catch (error) {
        dispatch({ type: "API_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("localFavs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistStates = () => useContext(ContextGlobal);
