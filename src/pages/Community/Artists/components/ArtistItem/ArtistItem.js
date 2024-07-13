import classNames from 'classnames/bind';
import styles from './ArtistItem.module.scss';
import { imgs } from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ArtistItem({ img, unique, sold, secondary, total, index, name }) {
    return (
        <tr className={cx('table-row')}>
            <td className={cx('text')}>
                <div className={cx('artist-wrap')}>
                    <span className={cx('rankded')}>#{index + 1}</span>
                    <div className={cx('wrap-info')}>
                        <Link to={`/@${name}`}>
                            <img src={img} className={cx('info-img')} />
                        </Link>
                        <div className={cx('wrap')}>
                            <Link to={`/@${name}`}>
                                <span className={cx('name')}>{name}</span>
                            </Link>
                            <Link to={`/@${name}`}>
                                <span className={cx('nickname')}>@80slolita</span>
                            </Link>
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
