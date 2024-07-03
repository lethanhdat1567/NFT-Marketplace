import styles from './Item.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '~/assets/images';
const cx = classNames.bind(styles);

function Item() {
    return (
        <div className={cx('wrap')}>
            <img src={imgs.avatar} className={cx('img')} />
            <div className={cx('info')}>
                <span className={cx('name')}>Blwants</span>
                <p className={cx('nickname')}>@blwants</p>
            </div>
        </div>
    );
}

export default Item;
