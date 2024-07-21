import { useState } from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Dropdown({ children, toggleDropdown }) {
    return (
        <div className={cx('dropdown', { active: toggleDropdown })}>
            <div className={cx('modal')}></div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default Dropdown;
