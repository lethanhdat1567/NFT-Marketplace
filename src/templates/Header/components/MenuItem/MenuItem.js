import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import ItemComp from './ItemComp';
import Tippy, { tippy } from '@tippyjs/react/headless';
import { PopperWrapper } from '~/layout/components/Popper';
import { arrowDown } from '~/assets/icons';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/layout/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ title, items, leftIcon, setShowNavbar }) {
    // Check screen width
    const handleWidth = () => {
        if (window.innerWidth <= 1200) {
            return 'bottom-start';
        } else {
            return 'bottom';
        }
    };
    // Hooks
    const [activeNav, setActiveNav] = useState(false);
    return (
        <div className={cx('menu')}>
            {/* Navbar desktop */}
            <Tippy
                interactive
                placement={handleWidth()}
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

            {/* Nav bar mobile */}
            <div
                onClick={() => setActiveNav(!activeNav)}
                className={cx('menu-wrap', 'menu-wrap--mobile', { active: activeNav })}
            >
                <div className={cx('menu-heading')}>{title}</div>
                <span className={cx('menu-arrow')}>{arrowDown()}</span>
            </div>
            <div className={cx('nav-item', { active: activeNav })}>
                {items.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            onClick={() => setShowNavbar(false)}
                            className={cx('nav-link', 'nav-link--mobile')}
                            to={`${process.env.REACT_APP_BASE_ROOT}/${item.replace(/\s+/g, '').toLowerCase()}`}
                        >
                            <Button leftIcon={leftIcon} className={cx('item-link')} key={index} text>
                                {item}
                            </Button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default MenuItem;
