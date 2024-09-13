export const reducer = (state, action) => {
  switch (action.type) {
    case "API_RESPONSE":
      return { ...state, api: action.payload, loading: false };
    case "LOCALSTORAGE":
      return { ...state, favs: action.payload, loading: false };
    case "ADD_DENTIST": // Corregido
      return { ...state, favs: [...state.favs, action.payload] };
    case "DEL_DENTIST":
      return { ...state, favs: state.favs.filter(dentist => dentist.id !== action.payload.id) };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "API_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
