import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import ItemComp from './ItemComp';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/layout/components/Popper';
import { arrowDown } from '~/assets/icons';

const cx = classNames.bind(styles);

function MenuItem({ title, items, leftIcon }) {
    return (
        <div className={cx('menu')}>
            <Tippy
                interactive
                render={(attrs) => (
                    <div className={cx('items-wrapper')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ItemComp leftIcon={leftIcon} items={items} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('menu-wrap')}>
                    <div className={cx('menu-heading')}>{title}</div>
                    <span className={cx('menu-arrow')}>{arrowDown()}</span>
                </div>
            </Tippy>
        </div>
    );
}

export default MenuItem;
