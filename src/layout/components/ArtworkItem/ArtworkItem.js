import { imgs } from '~/assets/images';
import styles from './ArtworkItem.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ArtworkItem({ avatar, banner }) {
    return (
        <div className="col">
            <article className={cx('item')}>
                <div className={cx('heading')}>
                    <img className={cx('heading-img')} src={avatar} />
                    <span className={cx('name')}>@mahbubul</span>
                </div>
                <div className={cx('banner')}>
                    <Link>
                        <img className={cx('banner-img')} src={banner} />
                    </Link>
                </div>
                <div className={cx('info')}>
                    <Link>
                        <h3 className={cx('title')}>SYNTH#BOI</h3>
                    </Link>

                    <div className={cx('user-wrap')}>
                        <div className={cx('wrap-own')}>
                            <span className={cx('sub-desc')}>Owner</span>
                            <div className={cx('user-info-wrap')}>
                                <img className={cx('user-img')} src={imgs.avatar} />
                                <span className={cx('user-name')}>@mahbubul</span>
                            </div>
                        </div>
                        <div className={cx('price-wrap')}>
                            <span className={cx('price-desc')}>Reserve price</span>
                            <span className={cx('price')}>16.0 ETH</span>
                        </div>
                    </div>
                    <Button className={cx('btn')} rounded>
                        Place Bid
                    </Button>
                </div>
            </article>
        </div>
    );
}

export default ArtworkItem;
