import type { IQoute } from '../model/type';
interface Props {
    qoute: IQoute;
}

export function Qoute(props: Props) {
    return <q>{props.qoute.text}</q>;
}
