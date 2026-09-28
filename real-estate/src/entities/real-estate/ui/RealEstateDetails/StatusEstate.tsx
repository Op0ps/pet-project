import type { StatusEstateProps } from './types';

export const StatusEstate = ({ statusCaption }: StatusEstateProps) => {
    return (
        <div className="font-bold p-2 border border-green-800 rounded-md bg-green-700 text-white">
            {statusCaption}
        </div>
    );
};
