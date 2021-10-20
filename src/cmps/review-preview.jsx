import { ReactComponent as IconQuotes } from '../assets/img/icon-quotes.svg';

export function ReviewPreview(props) {
    const { children, name, title, avatar } = props;
    return (
        <div className='review'>
            <p>{children}</p>
            {name && <label>{name}</label>}
            <small>{title}</small>
            <img src={avatar} alt="avatar"></img>
            <IconQuotes />
        </div>
    );
}
