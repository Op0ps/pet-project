import type { IAuthor } from '../model/type';
interface Props {
    author: IAuthor;
}

export function Author(props: Props) {
    return <cite>{props.author.name}</cite>;
}
