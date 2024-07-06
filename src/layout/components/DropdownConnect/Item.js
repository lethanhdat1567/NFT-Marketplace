import { imgs } from '~/assets/images';
import styles from './DropdownConnect.module.scss';
import classNames from 'classnames/bind';
import { arrowRight } from '~/assets/icons';

const cx = classNames.bind(styles);
function Item() {
    return (
        <div className={cx('item')}>
            <span className={cx('text')}>MetaMask</span>
            <div className={cx('item-wrap')}>
                <img src={imgs.drop1} className={cx('item-img')} />
                <span className={cx('icon')}> {arrowRight()}</span>
            </div>
        </div>
    );
}

export default Item;
