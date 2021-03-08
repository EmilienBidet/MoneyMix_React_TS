import { useEffect, useState } from 'react';

import { getClassification } from 'api/request.api';
import { ERequestStatus } from 'common/common.types';

interface IAccountRes {
    data: string[];
    error: unknown;
}

const useMmType = () => {
    const [res, setRes] = useState<IAccountRes>({
        data: [''],
        error: null,
    });
    const [state, setState] = useState(ERequestStatus.INITIAL);

    useEffect(() => {
        (async () => {
            setState(ERequestStatus.PROCESSING);
            const { error, data } = await getClassification('Type');
            setRes({ error, data });
            if (error) {
                return setState(ERequestStatus.WITH_ERROR);
            }

            return setState(ERequestStatus.WITH_DATA);
        })();
    }, []);

    return {
        fetchingMmType: state === ERequestStatus.PROCESSING,
        mmTypeError: res?.error,
        mmTypes: res?.data,
    };
};

export default useMmType;