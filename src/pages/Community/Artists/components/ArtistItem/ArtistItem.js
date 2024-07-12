import classNames from 'classnames/bind';
import styles from './ArtistItem.module.scss';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function ArtistItem({ img, unique, sold, secondary, total, index, name }) {
    return (
        <tr className={cx('table-row')}>
            <td className={cx('text')}>
                <div className={cx('artist-wrap')}>
                    <span className={cx('rankded')}>#{index + 1}</span>
                    <div className={cx('wrap-info')}>
                        <img src={img} className={cx('info-img')} />
                        <div className={cx('wrap')}>
                            <span className={cx('name')}>{name}</span>
                            <span className={cx('nickname')}>@80slolita</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className={cx('text', 'respon')}>{unique}</td>
            <td className={cx('text', 'respon')}>{sold}</td>
            <td className={cx('text', 'respon')}>5471 ETH</td>
            <td className={cx('text', 'respon')}>{secondary}</td>
            <td className={cx('text')}>{total}</td>
        </tr>
    );
}

export default ArtistItem;
