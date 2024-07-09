import classNames from 'classnames/bind';
import styles from './DropdownConnect.module.scss';
import Item from './Item';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function DropdownConnect({ toggle, setToggle }) {
    useEffect(() => {
        setToggle(toggle);
    }, [toggle]);
    return (
        // show/hide
        <div className={cx('dropdown', { show: toggle, hide: !toggle })}>
            <div className={cx('modal')}></div>
            <div className={cx('inner')}>
                <span
                    onClick={() => {
                        setToggle(false);
                    }}
                    className={cx('mark')}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </span>
                <span className={cx('title')}>Connect</span>
                <div className={cx('items')}>
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className={cx('separate-wrap')}>
                    <div className={cx('separate')}></div>
                    <span className={cx('separate-text')}>or</span>
                    <div className={cx('separate')}></div>
                </div>
                <Item />
                <p className={cx('desc')}>
                    By continuing you agree to MeeCats <Link className={cx('desc-link')}>Privacy Policy</Link> and{' '}
                    <Link className={cx('desc-link')}>Terms and Conditions</Link>
                </p>
            </div>
        </div>
    );
}

export default DropdownConnect;
