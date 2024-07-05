import Button from '~/layout/components/Button';
import styles from './Artwork.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function Artwork() {
    return (
        <div className={cx('artwork')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('header')}>
                        <div className="row row-cols-2 g-5">
                            <div className="col">
                                <div className={cx('banner')}>
                                    <div className={cx('banner-inner')}>
                                        <img src={imgs.ArtworkBanner} className={cx('banner-img')} />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('wrapper')}>
                                    <h1 className={cx('title')}>CONCERT FOR TWO - ACT 1</h1>
                                    <span className={cx('sub-title')}>Created by @benoitchalland</span>
                                    <div className={cx('info-product')}>
                                        <div className={cx('price-wrapper')}>
                                            <p className={cx('price-desc')}>Reserve Price</p>
                                            <span className={cx('price-title')}>0.35 ETH</span>
                                            <p className={cx('price')}>$604.45</p>
                                        </div>
                                        <div className={cx('user')}>
                                            <span className={cx('Owner')}>Owned by</span>
                                            <button className={cx('user-btn')}>
                                                <img src={imgs.ArtworkBtn} className={cx('btn-img')} />
                                                @evequelab
                                            </button>
                                        </div>
                                    </div>
                                    <Button rounded>View Artwork</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artwork;
