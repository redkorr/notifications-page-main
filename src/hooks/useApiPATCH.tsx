import { useState } from 'react';

import { ApiResponse } from '../types';

const BASE_URL = import.meta.env.MODE === 'production' ? import.meta.env.BASE_URL : 'http://localhost:3000';

const useApiPATCH = () => {
  const [response, setResponse] = useState<ApiResponse>({ success: false });

  async function fetchData<T>(path: string, body: T | undefined) {
    try {
      const responseOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };

      const fetchResponse = await fetch(`${BASE_URL}${path}`, responseOptions);

      const data = await fetchResponse.json();

      setResponse({ success: true, data });
    } catch (error) {
      setResponse({ success: false, error: error });
    }
  }

  return { response, fetchData };
};

export default useApiPATCH;
