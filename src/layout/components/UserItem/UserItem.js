import { imgs } from '~/assets/images';
import Button from '../Button';
import styles from './UserItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function UserItem() {
    return (
        <div className="col">
            <div className={cx('item')}>
                <img src={imgs.teamBanner} className={cx('background')} />
                <div className={cx('info')}>
                    <div className={cx('avatar')}>
                        <img src={imgs.teamAvatar} className={cx('avatar-img')} />
                    </div>
                    <h4 className={cx('name')}>Jane Cooper</h4>
                    <p className={cx('desc')}>NFT's are transform the way commerce things.</p>
                    <Button className={cx('btn')} outline>
                        Follow
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UserItem;
