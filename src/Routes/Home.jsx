import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        setDentists(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDentists();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card-grid">
      {dentists.map(dentist => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Home;
