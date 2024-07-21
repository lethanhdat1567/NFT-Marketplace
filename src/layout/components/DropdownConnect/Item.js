import { imgs } from '~/assets/images';
import styles from './DropdownConnect.module.scss';
import classNames from 'classnames/bind';
import { arrowRight } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Item() {
    return (
        <div className={cx('item')}>
            <span className={cx('text')}>Google</span>
            <div className={cx('item-wrap')}>
                <img src={imgs.google} className={cx('item-img')} />
                <span className={cx('icon')}> {arrowRight()}</span>
            </div>
        </div>
    );
}

export default Item;
