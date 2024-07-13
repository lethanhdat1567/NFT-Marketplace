import Tippy from '@tippyjs/react/headless';
import styles from './NFT.module.scss';
import classNames from 'classnames/bind';
import { Children, useState } from 'react';
import { arrowDown } from '~/assets/icons';
import NFTcard from '~/layout/components/NFTcard';
import { PopperWrapper } from '~/layout/components/Popper';

const cx = classNames.bind(styles);

function NFT({ children }) {
    // State
    const [active, setActive] = useState('NFTs');
    // Return
    return (
        <div className={cx('NFT')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('heading')}>Latest artworks with most valued bids</h2>
                    <div className={cx('nav-wrap')}>
                        <div className={cx('nav-left')}>
                            <span
                                className={cx('nft', { active: active === 'NFTs' })}
                                onClick={() => setActive('NFTs')}
                            >
                                NFTs
                            </span>
                            <span
                                className={cx('desc', { active: active === 'desc' })}
                                onClick={() => setActive('desc')}
                            >
                                Description
                            </span>
                        </div>
                        <div className={cx('nav-right')}>
                            <span className={cx('short')} onClick={() => setActive('shortBy')}>
                                Short by:
                            </span>
                            <Tippy
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('nav-more')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <ul className={cx('list')}>
                                                <li className={cx('item')}>Curated order</li>
                                                <li className={cx('item')}>New order</li>
                                                <li className={cx('item')}>Oldest order</li>
                                            </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('order')}>
                                    <span className={cx('current')}>Curated order</span>
                                    {arrowDown()}
                                </div>
                            </Tippy>
                        </div>
                    </div>
                    <div className={cx('items')}>
                        <div className={cx('item-wrapper')}>
                            <div className="row row-cols-3 row-cols-xl-2 row-cols-lg-1">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFT;
