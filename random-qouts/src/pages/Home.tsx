import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useAppDispatch } from '../app/store/hooks';
import { Qoute } from '../features/qoute/Qoute';
import { setQoute } from '../features/qoute/qouteSlice';
import type { IRandomQoute } from '../app/routes/home';

export function Home() {
    const data = useLoaderData<IRandomQoute>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setQoute(data));
    }, [dispatch, data]);

    return (
        <main>
            <div>{/* Filter */}</div>
            <div>
                <Qoute />
            </div>
        </main>
    );
}
