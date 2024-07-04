import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Footer({ icons }) {
    return (
        <footer className={cx('footer')}>
            <div className={cx('separate')}></div>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('heading')}>
                        <Link>
                            <img src={imgs.logo} className={cx('logo')} />
                        </Link>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')}>Explore</Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')}>Community</Link>
                            </li>
                            <li className={cx('item')}>
                                <Link className={cx('item-link')}>Drops</Link>
                            </li>
                        </ul>
                        <div className={cx('icons')}>
                            <Link to="/" className={cx('icon')}>
                                <FontAwesomeIcon className={cx('icon-img')} icon={icons.facebook} />
                            </Link>
                            <Link to="/" className={cx('icon')}>
                                <FontAwesomeIcon className={cx('icon-img')} icon={icons.instagram} />
                            </Link>
                            <Link to="/" className={cx('icon')}>
                                <FontAwesomeIcon className={cx('icon-img')} icon={icons.threads} />
                            </Link>
                        </div>
                    </div>
                    <ul className={cx('list-mobile')}>
                        <li className={cx('item')}>
                            <Link className={cx('item-link')}>Explore</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link className={cx('item-link')}>Community</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link className={cx('item-link')}>Drops</Link>
                        </li>
                    </ul>
                    <div className={cx('under')}>
                        <span className={cx('copy')}>
                            <Link className={cx('copy-item-link')}>©2022, All right reserved.</Link>
                        </span>
                        <ul className={cx('under-list')}>
                            <li className={cx('under-item')}>
                                <Link className={cx('udner-item-link')}>Privacy Policy</Link>
                            </li>
                            <li className={cx('under-item')}>
                                <Link className={cx('udner-item-link')}>Terms of Service</Link>
                            </li>
                            <li className={cx('under-item')}>
                                <Link className={cx('udner-item-link')}>Cookies Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
