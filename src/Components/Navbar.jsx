import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDentistStates } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useDentistStates();

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <h1>BrightSmile</h1>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/favs">Favorites</NavLink></li>
        <li>
          <div className='toggleSwitch'>
            <label>
              <input
                type='checkbox'
                onChange={handleThemeToggle}
                checked={state.theme === "light"}
              />
              <span className='slider'></span>
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
