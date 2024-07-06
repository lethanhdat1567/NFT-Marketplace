import classNames from 'classnames/bind';
import styles from './ArtistItem.module.scss';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function ArtistItem() {
    return (
        <tr className={cx('table-row')}>
            <td className={cx('text')}>
                <div className={cx('artist-wrap')}>
                    <span className={cx('rankded')}>#1</span>
                    <div className={cx('wrap-info')}>
                        <img src={imgs.avatar} className={cx('info-img')} />
                        <div className={cx('wrap')}>
                            <span className={cx('name')}>80slolita</span>
                            <span className={cx('nickname')}>@80slolita</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className={cx('text', 'respon')}>4</td>
            <td className={cx('text', 'respon')}>14</td>
            <td className={cx('text', 'respon')}>5471 ETH</td>
            <td className={cx('text', 'respon')}>0 ETH</td>
            <td className={cx('text')}>5.471 ETH</td>
        </tr>
    );
}

export default ArtistItem;
