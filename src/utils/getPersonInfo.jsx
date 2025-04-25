import { useState, useEffect } from 'react';

const getPersonInfo = (personId) => {
  const [personInfo, setPersonInfo] = useState({});

  useEffect(() => {
    if (!personId) return;

    const fetchPersonInfo = async () => {
      const URL = `https://api.themoviedb.org/3/person/${personId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch credits');

        const data = await response.json();

        setPersonInfo(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchPersonInfo();
  }, [personId]);

  return personInfo;
};

export default getPersonInfo;
