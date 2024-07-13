import { imgs } from '~/assets/images';
import Button from '../Button';
import styles from './UserItem.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserItem({ ab, aba }) {
    const [follow, setFollow] = useState(false);
    return (
        <div className="col">
            <div className={cx('item')}>
                <img src={ab} className={cx('background')} />
                <div className={cx('info')}>
                    <div className={cx('avatar')}>
                        <img src={aba} className={cx('avatar-img')} />
                    </div>
                    <h4 className={cx('name')}>Jane Cooper</h4>
                    <p className={cx('desc')}>NFT's are transform the way commerce things.</p>
                    <Button onClick={() => setFollow(!follow)} className={cx('btn', { follow: follow })} outline>
                        {follow ? 'Following' : 'Follow'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UserItem;
