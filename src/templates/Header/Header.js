import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import { imgs } from '~/assets/images';
import { collect, art } from '~/assets/icons';
import Search from '~/templates/Header/components/Search';
import Button from '~/layout/components/Button';
import MenuItem from './components/MenuItem/MenuItem';
import { arrowLeft } from '~/assets/icons';
import { useEffect, useState } from 'react';
import DropdownConnect from '~/layout/components/DropdownConnect';

const cx = classNames.bind(styles);

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    useEffect(() => {
        setToggleDropdown(false);
    }, []);
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
                        <Link to="/">Home</Link>
                        <MenuItem leftIcon={collect()} title="Explore" items={['Collection', 'ArtWork']} />
                        <MenuItem
                            leftIcon={art()}
                            title="Community"
                            items={['About us', 'Artists', 'Editorial', 'FAQs', 'Blogs']}
                        />
                        <Button
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                            rounded
                            className={cx('nav-btn-con')}
                        >
                            Connect
                        </Button>
                    </nav>
                    <Search type="mobile" />
                    <Button onClick={() => setToggleDropdown(!toggleDropdown)} rounded className={cx('header-btn')}>
                        Connect
                    </Button>
                    <div onClick={() => setShowNavbar(false)} className={cx('navbar-overlay')}></div>
                </div>
            </div>
            <DropdownConnect toggle={toggleDropdown} setToggle={setToggleDropdown}></DropdownConnect>
        </header>
    );
}

export default Header;
