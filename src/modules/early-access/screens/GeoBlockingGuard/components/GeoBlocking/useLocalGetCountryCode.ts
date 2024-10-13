import axios from 'axios';
import { useEffect, useState } from 'react';

export function useLocalGetCountryCode() {
  const [data, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getCountryCodesFile() {
      try {
        const response = await axios.get('./restricted-countries.json');

        const countryCode = response.headers['X-Country'];
        setData(countryCode);
      } finally {
        setLoading(false);
      }
    }

    getCountryCodesFile();
  }, []);

  return {
    isLoading,
    data,
  };
}
