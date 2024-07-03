import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import { imgs } from '~/assets/images';
import { collect, art } from '~/assets/icons';
import Search from '~/templates/Header/components/Search';
import Button from '~/layout/components/Button';
import MenuItem from './components/MenuItem/MenuItem';
import { arrowLeft } from '~/assets/icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <header className={cx('header')}>
            <div className="container">
                <div className={cx('inner')}>
                    <button className={cx('navbar-btn')} onClick={() => setShowNavbar(!showNavbar)}>
                        <img src={imgs.navbar} className={cx('navbar-btn-imgs')} />
                    </button>
                    <Link to="/" className={cx('logo')}>
                        <img src={imgs.logo} />
                    </Link>
                    <Search />
                    <nav className={cx('navbar', { show: showNavbar })}>
                        <button onClick={() => setShowNavbar(false)} className={cx('nav-back')}>
                            {arrowLeft()}
                        </button>
                        <MenuItem title="Home" items={['Home 1', 'Home 2', 'Home 3']} />
                        <MenuItem
                            leftIcon={collect()}
                            title="Explore"
                            items={['Explore 1', 'Explore 2', 'Explore 3']}
                        />
                        <MenuItem
                            leftIcon={art()}
                            title="Community"
                            items={['Community 1', 'Community 2', 'Community 3']}
                        />
                        <Button rounded className={cx('nav-btn-con')}>
                            Connect
                        </Button>
                    </nav>
                    <Search type="mobile" />
                    <Button rounded className={cx('header-btn')}>
                        Connect
                    </Button>
                    <div onClick={() => setShowNavbar(false)} className={cx('navbar-overlay')}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
