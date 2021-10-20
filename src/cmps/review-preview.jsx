import React from 'react';
import {ReactComponent as IconQuotes} from '../assets/img/icon-quotes.svg'
import pic from '../assets/img/avatar-kady.jpg'

export class Review extends React.Component {
    render() {
        const { children, name, title, avatar } = this.props;
        return (
            <div className='review'>
                <p>{children}</p>
                <label>{name}</label>
                <small>{title}</small>
                {/* <div style={{backgroundImage:`url(../assets/img/${avatar})`}}/> */}
                <img src={pic} alt="image"></img>
                <IconQuotes />
            </div>
        );
    }
}
