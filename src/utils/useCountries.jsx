import { useState, useEffect } from 'react';

const useCountries = (countryCodes = []) => {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    if (!countryCodes.length) return;

    const fetchCountries = async () => {
      const URL = `https://api.themoviedb.org/3/configuration/countries?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`;

      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch countries');

        const data = await response.json();

        const filteredNames = data
          .filter((country) => countryCodes.includes(country.iso_3166_1))
          .map((country) => country.english_name);

        setCountryNames(filteredNames);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, [countryCodes]);

  return countryNames;
};

export default useCountries;
