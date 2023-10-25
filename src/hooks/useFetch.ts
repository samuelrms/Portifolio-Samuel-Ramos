import { useEffect, useRef, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const useFetch = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const defaultHeaders = {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GITHUB}`
        };

        const response: AxiosResponse<T> = await axios.get(`${url}`, {
          ...optionsRef.current,
          headers: {
            ...defaultHeaders,
            ...(optionsRef.current?.headers || {})
          },
          cancelToken: source.token
        });

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        if (!source.token.reason) {
          setData(response.data);
        }
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
        }
      } finally {
        if (!source.token.reason) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      source.cancel('Request canceled');
    };
  }, [url]);

  return { data, loading, error };
};

export const useFetchData = async <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T | null> => {
  const source = axios.CancelToken.source();

  try {
    const defaultHeaders = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_GITHUB}`
    };

    const response: AxiosResponse<T> = await axios.get(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options?.headers || {})
      },
      cancelToken: source.token
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch (err) {
    if (!axios.isCancel(err)) {
      throw err;
    }
  } finally {
    source.cancel('Request canceled');
  }

  return null;
};
