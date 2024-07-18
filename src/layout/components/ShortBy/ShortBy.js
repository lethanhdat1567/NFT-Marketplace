import styles from './ShortBy.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '../Popper';
import { arrowDown } from '~/assets/icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function ShortBy({ MenuItems }) {
    const [currentItem, setCurrentItem] = useState(MenuItems[0]);
    return (
        <div className={cx('wrapper')}>
            <span className={cx('short')}>Short by:</span>
            <Tippy
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('nav-more')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ul className={cx('list')}>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li
                                            onClick={() => {
                                                setCurrentItem(item);
                                            }}
                                            key={index}
                                            className={cx('item')}
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('order')}>
                    <span className={cx('current')}>{currentItem}</span>
                    {arrowDown()}
                </div>
            </Tippy>
        </div>
    );
}

export default ShortBy;
