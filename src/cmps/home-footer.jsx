// import { ReactComponent as LogoIcon } from '../assets/svg/logo-icon.svg';

import { Link } from 'react-router-dom';

import { ReactComponent as FacebookIcon } from '../assets/img/icon-facebook.svg';
import { ReactComponent as PinterestIcon } from '../assets/img/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from '../assets/img/icon-twitter.svg';
{
    /* <LogoIcon /> */
}
{
    /* <LogoText /> */
}

export const HomeFooter = () => {
    return (
        <footer>
            <div className='brand-name'>
                <label>myteam</label>
                <nav>
                    <Link>home</Link>
                    <Link>about</Link>
                </nav>
            </div>
            <div className="address">
                987 Hillcrest Lane
                <br />
                Irvine, CA
                <br />
                California 92714
                <br />
                Call Us : 949-833-7432
            </div>
            <div className="copyrights">
                <div className='socials'>
                    <FacebookIcon/>
                    <PinterestIcon/>
                    <TwitterIcon/>
                </div>
                Copyright 2020. All Rights Reserved
            </div>
        </footer>
    );
};
