import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '~/layout/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemComp({ items, leftIcon }) {
    return (
        <ul className={cx('items')}>
            <li className={cx('item')}>
                {items.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            className={cx('nav-link')}
                            to={`${process.env.REACT_APP_BASE_ROOT}/${item.replace(/\s+/g, '').toLowerCase()}`}
                        >
                            <Button leftIcon={leftIcon} className={cx('item-link')} key={index} text>
                                {item}
                            </Button>
                        </Link>
                    );
                })}
            </li>
        </ul>
    );
}

export default ItemComp;
