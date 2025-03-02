import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

//Function generic to handle appwrite requests.
interface UseAppwriteOptions<T, P extends Record<string, string | number>> 
{
  fn: (params: P) => Promise<T>;
  paramst?: P;
  skip?: boolean;
}

interface UseAppwriteReturn<T, P> 
{
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}

export const useAppwrite = <T, P extends Record<string, string | number>>(
  {fn,paramst = {} as P, skip = false,}: UseAppwriteOptions<T, P>
): UseAppwriteReturn<T, P> => {


  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        Alert.alert("Error", errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

  useEffect(() => {
    if (!skip) {
      fetchData(paramst);
    }
  }, []);

  const refetch = async (newParams: P) => await fetchData(newParams);

  return { data, loading, error, refetch };
};

