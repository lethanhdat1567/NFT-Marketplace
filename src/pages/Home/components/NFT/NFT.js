import styles from './NFT.module.scss';
import classNames from 'classnames/bind';
import { Children, useState } from 'react';
import { arrowDown } from '~/assets/icons';
import NFTcard from '~/layout/components/NFTcard';

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
                            <span
                                className={cx('short', { active: active === 'shortBy' })}
                                onClick={() => setActive('shortBy')}
                            >
                                Short by:
                            </span>
                            <div
                                className={cx('order', { active: active === 'order' })}
                                onClick={() => setActive('order')}
                            >
                                <span className={cx('current')}>Curated order</span>
                                {arrowDown()}
                            </div>
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
