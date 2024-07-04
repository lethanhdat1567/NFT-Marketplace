import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';

import { imgs } from '~/assets/images';
import { arrowRight } from '~/assets/icons';
const cx = classNames.bind(styles);

function Subscribe() {
    return (
        <div className={cx('subscribe')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className="row row-cols-2 row-cols-lg-1 g-4">
                        <div className="col">
                            <div className={cx('info')}>
                                <h2 className={cx('title')}>Subscribe Our Letest Newslaters</h2>
                                <p className={cx('desc')}>
                                    Stay Up To Date On New Releases, Interviews, Events, And Updates From Foundation's
                                    Community.
                                </p>
                                <div className={cx('btn-wrap')}>
                                    <input placeholder="Enter your email" className={cx('input-btn')} />
                                    <div className={cx('arrow-wrap')}>
                                        <span className={cx('arrow-icons')}>{arrowRight()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('banner')}>
                                <div className={cx('banner-inner')}>
                                    <img src={imgs.subscribe} className={cx('banner-img')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
