import classNames from 'classnames/bind';
import style from './Hero.module.scss';
import Button from '~/layout/components/Button';
import { imgs } from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Hero() {
    return (
        <div className={cx('hero')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('hero-wrap')}>
                        <div className={cx('wrap')}>
                            <div className={cx('left')}>
                                <span className={cx('sub-title')}>Discover & Showcase</span>
                                <h1 className={cx('heading')}>Your Favorite Crypto Art.</h1>
                                <p className={cx('desc')}>
                                    A seamless NFT creation experience, from generation to mint in a few easy steps.
                                </p>
                                <div className={cx('info')}>
                                    <Button className={cx('info-btn')} primary>
                                        Let’s Explore
                                    </Button>
                                    <Link>
                                        <img className={cx('info-img')} src={imgs.user} />
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('right')}>
                                <div className={cx('banner-inner')}>
                                    <div className={cx('banner-item')}>
                                        <img src={imgs.banner} className={cx('banner-img')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
