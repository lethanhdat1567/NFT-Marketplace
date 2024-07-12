import styles from './Artists.module.scss';
import classNames from 'classnames/bind';
import ArtistItem from './components/ArtistItem';
import Button from '~/layout/components/Button';
import Subscribe from '~/pages/Home/components/Subscribe';
import { imgs } from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Artists() {
    // Data
    const artists = [
        {
            name: 'Datlee',
            img: imgs.rank1,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'Duck',
            img: imgs.rank2,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'JonJizzle_650',
            img: imgs.rank3,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'Dominicanos',
            img: imgs.rank4,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'balinese5567',
            img: imgs.rank5,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'Millsyballin',
            img: imgs.rank6,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'Mr_Decadent',
            img: imgs.rank7,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'adrian91',
            img: imgs.rank8,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'InMyDuffle',
            img: imgs.rank9,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'sixsixsix_eth',
            img: imgs.rank10,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'MelCapone',
            img: imgs.rank11,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: '1904Drew',
            img: imgs.rank12,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'tomomoruya21',
            img: imgs.rank13,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'circular_parrot180',
            img: imgs.rank14,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'fancy_sheep1382',
            img: imgs.rank15,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'HONGTAEK',
            img: imgs.rank16,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
        {
            name: 'beloved_peas571',
            img: imgs.rank17,
            unique: '4',
            sold: '14',
            secondary: '10ETH',
            total: '5.471ETH',
        },
    ];
    // State Hook
    const [more, setMore] = useState(false);
    const handleMore = () => {
        setMore(!more);
        if (more) {
            window.scrollTo({ top: '800', behavior: 'smooth' });
        }
    };
    return (
        <div className={cx('artists')}>
            <div className={cx('container')}>
                <div className={cx('inner', { more: more })}>
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
                            {artists.map((data, index) => (
                                <ArtistItem
                                    key={index}
                                    img={data.img}
                                    unique={data.unique}
                                    sold={data.sold}
                                    secondary={data.secondary}
                                    total={data.total}
                                    index={index}
                                    name={data.name}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <Button
                    onClick={() => {
                        handleMore();
                    }}
                    className={cx('btn')}
                    rounded
                >
                    {more ? 'Less' : 'More'} Creators
                </Button>
            </div>
            <Subscribe banner={imgs.ArtistBanner} />
        </div>
    );
}

export default Artists;
