import { imgs } from '~/assets/images';
import styles from './Community.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Community() {
    return (
        <div className={cx('community')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>Join leargest NFT community</h2>
                    <p className={cx('desc')}>
                        Join the millions of creators, collectors, and curators who are on this journey with you.
                    </p>
                    <div className={cx('wrap-img')}>
                        <div className={cx('img-inner')}>
                            <Link>
                                <img src={imgs.CommuBanner} className={cx('decor')} />
                            </Link>
                            <Link>
                                <img className={cx('decor-1')} src={imgs.Commu1} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-2')} src={imgs.Commu2} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-3')} src={imgs.Commu3} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-4')} src={imgs.Commu4} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-5')} src={imgs.Commu5} title="Create use" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;
