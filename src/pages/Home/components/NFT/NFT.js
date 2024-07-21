import Tippy from '@tippyjs/react/headless';
import styles from './NFT.module.scss';
import classNames from 'classnames/bind';
import { Children, useState } from 'react';
import { arrowDown } from '~/assets/icons';
import NFTcard from '~/layout/components/NFTcard';
import { PopperWrapper } from '~/layout/components/Popper';
import ShortBy from '~/layout/components/ShortBy';
import Dropdown from '~/layout/components/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmarkCircle, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { NFTitems } from '../../../../cloneData/cloneData';

const cx = classNames.bind(styles);

function NFT({ children, toggleDropdown, setToggleDropdown }) {
    // State
    const [active, setActive] = useState('NFTs');
    // Data
    const ShortByItems = ['Trending', 'Date created - Newest', 'Date created - Oldest'];
    // Return
    return (
        <>
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
                                    className={cx('desc', { active: active === 'Description' })}
                                    onClick={() => setActive('Description')}
                                >
                                    Description
                                </span>
                            </div>
                            <div className={cx('short-wrap')}>
                                <ShortBy active={active} setActive={setActive} MenuItems={ShortByItems} />
                            </div>
                        </div>
                        <div className={cx('items')}>
                            <div className={cx('item-wrapper')}>
                                <div className="row row-cols-3 row-cols-xl-2 row-cols-lg-1">
                                    {NFTitems[active].map((card, index) => {
                                        return (
                                            <NFTcard
                                                key={index}
                                                toggleDropdown={toggleDropdown}
                                                setToggleDropdown={setToggleDropdown}
                                                a={card.a}
                                                avatar={card.avatar}
                                                name="@mahbubul"
                                                banner={card.banner}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dropdown toggleDropdown={toggleDropdown}>
                <div className={cx('wrap')}>
                    <div className={cx('heading-drop')}>
                        <h3 className={cx('title')}>Share</h3>
                        <FontAwesomeIcon
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                            icon={faXmarkCircle}
                            className={cx('icon', 'icon--close')}
                        />
                    </div>
                    <div className={cx('info-drop')}>
                        <p className={cx('desc-drop')}>Share this cart to:</p>
                        <div className={cx('icons-drop')}>
                            <div className={cx('icon-wrap')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                            </div>
                            <div className={cx('icon-wrap')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                            </div>
                            <div className={cx('icon-wrap')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faThreads} />
                            </div>
                            <div className={cx('icon-wrap')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faX} />
                            </div>
                        </div>
                    </div>
                </div>
            </Dropdown>
        </>
    );
}

export default NFT;
