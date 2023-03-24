import { useEffect, useState } from 'react';

import { Notification } from '../../src/types';

const BASE_URL = import.meta.env.MODE === 'production' ? import.meta.env.BASE_URL : 'http://localhost:3000';

const useApi = (path: string): Array<Notification> | undefined => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}${path}`);

        const json = await response.json();

        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [path]);

  return data;
};

export default useApi;
