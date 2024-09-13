import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import doctorImg from '../../public/images/doctor.jpg';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dentist, setDentist] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
      } catch (error) {
        setError(error.message);
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='details'>
      <div className='detailsContainer'>
        <img src={`../../public/profile_images/${id}.jpg`} alt="" />
        <img src={doctorImg} alt="fotoPerfil" />  
        <div>
          <h3>{dentist.name}</h3>
          <p>Email: {dentist.email}</p> 
          <p>Phone: {dentist.phone}</p>  
          <p>Website: {dentist.website}</p> 
        </div>
      </div>
    </div>
  );
};

export default Detail;
