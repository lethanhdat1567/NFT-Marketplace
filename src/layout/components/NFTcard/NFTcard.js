import { imgs } from '~/assets/images';
import styles from './NFTcard.module.scss';
import classNames from 'classnames/bind';
import { heart, share } from '~/assets/icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function NFTcard({ avatar, name, banner, a, setToggleDropdown, toggleDropdown }) {
    const [heartActive, setHeartActive] = useState(false);
    return (
        <>
            <div className="col">
                <div className={cx('item')}>
                    <div className={cx('info')}>
                        <img src={avatar} className={cx('avatar')} />
                        <h3 className={cx('name')}>{name}</h3>
                    </div>
                    <div className={cx('product')}>
                        <img src={banner} className={cx('product-img')} />
                        <div className={cx('sidebar')}>
                            <div className={cx('sidebar-avatar')}>
                                <img className={cx('avatar-img')} src={a} />
                            </div>
                            <div onClick={() => setHeartActive(!heartActive)} className={cx('favor')}>
                                <span className={cx('heart-icon', { active: heartActive })}>{heart()}</span>
                                <span className={cx('favor-total')}>23.3K</span>
                            </div>
                            <div onClick={() => setToggleDropdown(!toggleDropdown)} className={cx('share')}>
                                {share()}
                                <span className={cx('share-total')}>14.3K</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-info')}>
                        <span className={cx('product-sub')}>women of web</span>
                        <span className={cx('product-title')}>SYNTH#BOI</span>
                        <span className={cx('status')}>Owner</span>
                    </div>
                    <div className={cx('buy')}>
                        <div className={cx('buy-user')}>
                            <img src={imgs.avagr1} className={cx('buy-avatar')} />
                            <img src={imgs.avagr2} className={cx('buy-avatar')} />
                            <img src={imgs.ava1} className={cx('buy-avatar')} />
                            <img src={imgs.ava2} className={cx('buy-avatar')} />
                        </div>
                        <p className={cx('time')}>Last sold for 16.0 ETH</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NFTcard;
