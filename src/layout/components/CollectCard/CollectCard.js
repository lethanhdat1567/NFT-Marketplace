import { imgs } from '~/assets/images';
import styles from './CollectCard.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function CollectCard({ name, avatar, user, background }) {
    return (
        <div className="col">
            <Link to={`${process.env.REACT_APP_BASE_ROOT}/artwork`}>
                <div className={cx('item')}>
                    <div className={cx('background')}>
                        <img src={background} className={cx('background-img')} />
                    </div>
                    <h3 className={cx('name')}>{name}</h3>
                    <div className={cx('user')}>
                        <img src={avatar} className={cx('user-img')} />
                        <span className={cx('user-name')}>{user}</span>
                    </div>
                    <div className={cx('info')}>
                        <div>
                            <p className={cx('info-desc')}>Arkwork:</p>
                            <p className={cx('number')}>12</p>
                        </div>
                        <div>
                            <p className={cx('info-desc')}>Total Sale</p>
                            <p className={cx('total')}>0.6 ETH</p>
                        </div>
                        <div className={cx('wrapper')}>
                            <p className={cx('info-desc')}>Collected by (5)</p>
                            <div className={cx('img-wrap')}>
                                <img src={imgs.avagr1} className={cx('img-user')} />
                                <img src={imgs.avagr2} className={cx('img-user')} />
                                <img src={imgs.ava1} className={cx('img-user')} />
                                <img src={imgs.ava2} className={cx('img-user')} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CollectCard;
