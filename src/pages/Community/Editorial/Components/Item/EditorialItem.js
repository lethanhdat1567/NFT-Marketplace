import { imgs } from '~/assets/images';
import styles from './EditorialItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function EditorialItem({ title, banner, desc }) {
    return (
        <div className="col">
            <div className={cx('item')}>
                <div className={cx('banner')}>
                    <div className={cx('banner-inner')}>
                        <Link>
                            <img src={banner} className={cx('banner-img')} />
                        </Link>
                    </div>
                </div>
                <div className={cx('info')}>
                    <Link>
                        {' '}
                        <h3 className={cx('name')}>{title}</h3>
                    </Link>
                    <p className={cx('desc')}>{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default EditorialItem;
