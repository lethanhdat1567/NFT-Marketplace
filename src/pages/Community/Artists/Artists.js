import styles from './Artists.module.scss';
import classNames from 'classnames/bind';
import ArtistItem from './components/ArtistItem';
import Button from '~/layout/components/Button';
import Subscribe from '~/pages/Home/components/Subscribe';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function Artists() {
    return (
        <div className={cx('artists')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <h1 className={cx('heading')}>Trending creators</h1>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('table-row-heading')}>
                                <th className={cx('table-heading-text', 'left')}>Rank</th>
                                <th className={cx('table-heading-text', 'respon')}>Unique Collectors</th>
                                <th className={cx('table-heading-text', 'respon')}>NFTs Sold</th>
                                <th className={cx('table-heading-text', 'respon')}>Primary Sales</th>
                                <th className={cx('table-heading-text', 'respon')}>Secondary Sales</th>
                                <th className={cx('table-heading-text')}>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody className={cx('tbody')}>
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                            <ArtistItem />
                        </tbody>
                    </table>

                    <Button className={cx('btn')} rounded>
                        More Creators
                    </Button>
                </div>
            </div>
            <Subscribe banner={imgs.ArtistBanner} />
        </div>
    );
}

export default Artists;
