import { useEffect, useState } from 'react';

import { getClassification } from 'api/request.api';
import { ERequestStatus } from 'common/common.types';

interface IAccountRes {
    data: string[];
    error: unknown;
}

const useMmRisk = () => {
    const [res, setRes] = useState<IAccountRes>({
        data: [''],
        error: null,
    });
    const [state, setState] = useState(ERequestStatus.INITIAL);

    useEffect(() => {
        (async () => {
            setState(ERequestStatus.PROCESSING);
            const { error, data } = await getClassification('Risk');
            setRes({ error, data });
            if (error) {
                return setState(ERequestStatus.WITH_ERROR);
            }

            return setState(ERequestStatus.WITH_DATA);
        })();
    }, []);

    return {
        fetchingMmRisk: state === ERequestStatus.PROCESSING,
        mmAssetRiskError: res?.error,
        mmAssetRisks: res?.data,
    };
};

export default useMmRisk;