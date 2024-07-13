import { imgs } from '~/assets/images';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('profile')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('banner')}>
                        <div className={cx('banner-inner')}>
                            <img src={imgs.amazon} className={cx('warning')} />
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <h1 className={cx('title')}>Not found :(</h1>
                        <p className={cx('desc')}>
                            Hiện tại trang wed chưa hỗ trợ trang profile
                            <br /> mong quý khách thông cảm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
