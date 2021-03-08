import useFetch from 'common/hooks/useFetch';
import { NetWorthSimilar } from 'networth/networth.type';
import { getNetWorthSimilar } from 'api/request.api';

const useNetWorthSimilar = () => {
  const { res, loading } = useFetch(getNetWorthSimilar, {});
  return { fetchingNetWorthSimilar: loading, netWorthSimilar: res?.data as NetWorthSimilar, netWorthSimilarError: res?.error };
};

export default useNetWorthSimilar;
