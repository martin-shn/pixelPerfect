import { Component } from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as LogoIcon } from '../assets/svg/logo-icon.svg';
// import { ReactComponent as LogoText } from '../assets/svg/logo-text.svg';
{
    /* <LogoIcon /> */
}
{
    /* <LogoText /> */
}

export class HomeHeader extends Component {
    state = {};

    render() {
        return (
            <header>
                <div className='main-content'>
                    <div className='logo'>
                        <label>myteam</label>
                    </div>
                    <nav>
                        <Link>home</Link>
                        <Link>about</Link>
                    </nav>
                    <div className='contact-us'>
                        <button className='contact-us-btn'>contact us</button>
                    </div>
                </div>
            </header>
        );
    }
}
