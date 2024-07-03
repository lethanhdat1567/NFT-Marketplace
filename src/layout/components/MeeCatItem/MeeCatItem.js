import classNames from 'classnames/bind';
import styles from './MeeCatItem.module.scss';

import { MeeCatIcon } from '~/assets/icons';
import { imgs } from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MeeCatItem({ img }) {
    return (
        <div className="col">
            <div className={cx('item')}>
                <div className={cx('card')}>
                    <Link className={cx('card-wrap')} to="/">
                        <img src={img} className={cx('card-img')} />
                    </Link>
                    <div className={cx('header')}>
                        <div className={cx('users')}>
                            <img src={imgs.avatar} className={cx('user-img')} />
                            <img src={imgs.avatar} className={cx('user-img')} />
                            <img src={imgs.avatar} className={cx('user-img')} />
                            <img src={imgs.avatar} className={cx('user-img')} />
                        </div>
                        {MeeCatIcon()}
                    </div>
                </div>
                <div className={cx('info')}>
                    <div className={cx('sub')}>Digital Fashion World</div>
                    <Link to="/">
                        <div className={cx('title')}>THE 33 MASK</div>
                    </Link>
                    <div className={cx('cart')}>
                        <span className={cx('sold')}>Sold out</span>
                        <span className={cx('timer')}>Traded 2 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeeCatItem;
