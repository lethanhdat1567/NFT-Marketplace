import { imgs } from '~/assets/images';
import styles from '../Items.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Item2() {
    return (
        <div className={cx('item')}>
            <div className={cx('banner')}>
                <div className={cx('banner-inner')}>
                    <img src={imgs.BlogBannerDetail1} className={cx('banner-img')} />
                </div>
            </div>
            <h2 className={cx('title')}>How and when was your first approach to NFTs?</h2>
            <p className={cx('desc')}>
                <mark className={cx('mark')}>The Lofty Mom (TLM):</mark> In 2021 I started on Clubhouse and learned
                about NFTs through NFTS.tips. It was through those rooms that I met many creators and artists who were
                all learning alongside me. The one who really gave me the knowledge on how to get ETH, and mint my first
                piece on OpenSea was Lizzy, who’s now the social media manager of OpenSea. It’s amazing to see all the
                early adopters truly thrive in the Web3 space.
                <br />
                <br />
                <mark className={cx('mark')}>Mark Aguilar:</mark> My journey was similar to The Lofty Mom’s, but I was
                mostly in the background trying to understand what NFTs were about. When I saw the successes she was
                having as an artist, I knew we were on to something and that’s what led me to become the developer for
                our project.
            </p>
        </div>
    );
}

export default Item2;
