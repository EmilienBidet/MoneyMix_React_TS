import { useEffect, useState } from 'react';

import { getClassification } from 'api/request.api';
import { ERequestStatus } from 'common/common.types';

interface IAccountRes {
    data: string[];
    error: unknown;
}

const useMmAssetClass = () => {
    const [res, setRes] = useState<IAccountRes>({
        data: [''],
        error: null,
    });
    const [state, setState] = useState(ERequestStatus.INITIAL);

    useEffect(() => {
        (async () => {
            setState(ERequestStatus.PROCESSING);
            const { error, data } = await getClassification('Asset Class');
            setRes({ error, data });
            if (error) {
                return setState(ERequestStatus.WITH_ERROR);
            }

            return setState(ERequestStatus.WITH_DATA);
        })();
    }, []);

    return {
        fetchingMmAssetClass: state === ERequestStatus.PROCESSING,
        mmAssetClassError: res?.error,
        mmAssetClasses: res?.data,
    };
};

export default useMmAssetClass;