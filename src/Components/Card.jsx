import React from 'react';
import { Link } from 'react-router-dom';
import { useDentistStates } from '../Components/utils/global.context';
import doctorImg from '../../public/images/doctor.jpg';

const Card = ({ dentist }) => {
  const { state, dispatch } = useDentistStates();
  const isFav = state.favs.some(fav => fav.id === dentist.id);

  const handleFavToggle = () => {
    dispatch({
      type: isFav ? "DEL_DENTIST" : "ADD_DENTIST",
      payload: dentist
    });
  };

  return (
    <div className="card">
      <img src={dentist.profileImage ? dentist.profileImage : doctorImg} alt={`${dentist.name}`} />
      <i
        className={`fa-solid fa-star ${isFav ? 'checked' : ''}`}
        onClick={handleFavToggle}
      ></i>
      <Link to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
      <p>User: {dentist.username}</p>
      <button onClick={handleFavToggle} className="favButton">
        {isFav ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default Card;
