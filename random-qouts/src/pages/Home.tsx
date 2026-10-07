import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useAppDispatch } from '../app/store/hooks';
import { Qoute } from '../features/qoute/Qoute';
import { setQoute } from '../features/qoute/qouteSlice';
import type { IQoute } from '../features/qoute/qouteSlice';

export function Home() {
    const data = useLoaderData<IQoute | undefined>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setQoute(data));
        }
    }, [dispatch, data]);

    return (
        <>
            <div>{/* Filter */}</div>
            <div>
                <Qoute />
            </div>
        </>
    );
}
