import Button from '~/layout/components/Button';
import styles from './Artwork.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '~/assets/images';
import { arrowDown } from '~/assets/icons';
import ArtworkItem from '~/layout/components/ArtworkItem';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/layout/components/Popper';
import Subscribe from '~/pages/Home/components/Subscribe';
const cx = classNames.bind(styles);

function Artwork() {
    return (
        <>
            <div className={cx('artwork')}>
                <div className="container">
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className="row row-cols-2 row-cols-lg-1 g-4">
                                <div className="col">
                                    <div className={cx('banner')}>
                                        <div className={cx('banner-inner')}>
                                            <img src={imgs.ArtworkBanner} className={cx('banner-img')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={cx('wrapper')}>
                                        <h1 className={cx('title')}>CONCERT FOR TWO - ACT 1</h1>
                                        <span className={cx('sub-title')}>Created by @benoitchalland</span>
                                        <div className={cx('info-product')}>
                                            <div className={cx('price-wrapper')}>
                                                <p className={cx('price-desc')}>Reserve Price</p>
                                                <span className={cx('price-title')}>0.35 ETH</span>
                                                <p className={cx('price')}>$604.45</p>
                                            </div>
                                            <div className={cx('user')}>
                                                <span className={cx('Owner')}>Owned by</span>
                                                <button className={cx('user-btn')}>
                                                    <img src={imgs.ArtworkBtn} className={cx('btn-img')} />
                                                    @evequelab
                                                </button>
                                            </div>
                                        </div>
                                        <Button rounded>View Artwork</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('content-inner')}>
                                <div className={cx('content-heading')}>
                                    <h2 className={cx('content-title')}>ARTWORKS (114)</h2>
                                    <div className={cx('content-sort')}>
                                        <span className={cx('sort-desc')}>Short by:</span>
                                        <Tippy
                                            placement="bottom-end"
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('artwork-dropdown')} tabIndex="-1" {...attrs}>
                                                    <PopperWrapper>
                                                        <ul className={cx('artwork-list')}>
                                                            <li className={cx('artwork-iten')}>Trending</li>
                                                            <li className={cx('artwork-iten')}>
                                                                Date created - Newest
                                                            </li>
                                                            <li className={cx('artwork-iten')}>Oldest</li>
                                                            <li className={cx('artwork-iten')}>Price</li>
                                                            <li className={cx('artwork-iten')}>Price - lowest</li>
                                                        </ul>
                                                    </PopperWrapper>
                                                </div>
                                            )}
                                        >
                                            <div className={cx('sort-btn')}>
                                                <span className={cx('sort-type')}>Trending</span>
                                                {arrowDown()}
                                            </div>
                                        </Tippy>
                                    </div>
                                </div>
                                <div className="row row-cols-3 row-cols-lg-2 row-cols-md-1 g-3 gy-4">
                                    <ArtworkItem avatar={imgs.ava1} banner={imgs.ArtworkItem} />
                                    <ArtworkItem avatar={imgs.ava2} banner={imgs.art1} />
                                    <ArtworkItem avatar={imgs.ava3} banner={imgs.art2} />
                                    <ArtworkItem avatar={imgs.avatarComment} banner={imgs.art3} />
                                    <ArtworkItem avatar={imgs.avatarComment1} banner={imgs.art4} />
                                    <ArtworkItem avatar={imgs.ava1} banner={imgs.art5} />
                                    <ArtworkItem avatar={imgs.ava2} banner={imgs.art6} />
                                    <ArtworkItem avatar={imgs.ava3} banner={imgs.art7} />
                                    <ArtworkItem avatar={imgs.avatarComment} banner={imgs.art8} />
                                    <ArtworkItem avatar={imgs.avatarComment1} banner={imgs.art9} />
                                    <ArtworkItem avatar={imgs.ava1} banner={imgs.art10} />
                                    <ArtworkItem avatar={imgs.ava2} banner={imgs.art11} />
                                    <ArtworkItem avatar={imgs.ava3} banner={imgs.art12} />
                                    <ArtworkItem avatar={imgs.avatarComment} banner={imgs.art13} />
                                    <ArtworkItem avatar={imgs.avatarComment1} banner={imgs.art14} />
                                    <ArtworkItem avatar={imgs.ava1} banner={imgs.art15} />
                                    <ArtworkItem avatar={imgs.ava2} banner={imgs.art16} />
                                    <ArtworkItem avatar={imgs.ava3} banner={imgs.art17} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe banner={imgs.subscribe}></Subscribe>
        </>
    );
}

export default Artwork;
