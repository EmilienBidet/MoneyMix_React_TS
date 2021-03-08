import { useEffect, useState } from 'react';

import { getSimilarAllocations } from 'api/request.api';
import { AllocationsFilter } from 'allocation/allocation.enum';
import { ChartData } from 'allocation/allocation.type';

const useSimilarAllocation = (filter: AllocationsFilter = AllocationsFilter.TYPE) => {
  const [error, setError] = useState();
  const [fetching, setFetching] = useState<boolean>(false);
  const [allocationChartData, setAllocationChartData] = useState<ChartData>();

  useEffect(() => {
    const fetchAllocations = async () => {
      setFetching(true);
      const params = {
        filter
      };

      const { data, error: err } = await getSimilarAllocations(params);
      setFetching(false);

      if (!err) {

        if (data?.chartData) {
          setAllocationChartData(data.chartData);
        }

        return data;
      }

      return setError(err.message || 'Error on fetching Similar Allocations');
    };

    fetchAllocations();
  }, [filter]);

  return { fetching, error, similarAllocationChartData: allocationChartData };
};

export default useSimilarAllocation;
