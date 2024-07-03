import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import Button from '~/layout/components/Button';

const cx = classNames.bind(styles);

function ItemComp({ items, leftIcon }) {
    return (
        <ul className={cx('items')}>
            <li className={cx('item')}>
                {items.map((item, index) => {
                    return (
                        <Button leftIcon={leftIcon} className={cx('item-link')} key={index} text to={item}>
                            {item}
                        </Button>
                    );
                })}
            </li>
        </ul>
    );
}

export default ItemComp;
