import { useEffect } from 'react';

import { useAppDispatch } from '../app/store/hooks';
import { Qoute } from '../features/qoute/Qoute';
import { setQoute } from '../features/qoute/qouteSlice';
import { setAuthor } from '../features/author/authorSlice';
import { getRandomQoute } from '../shared/utils/getRandomInt';

export function Home() {
    const data = getRandomQoute();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setQoute(data.qoute));
        dispatch(setAuthor(data.author));
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
