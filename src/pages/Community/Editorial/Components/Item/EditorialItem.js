import { imgs } from '~/assets/images';
import styles from './EditorialItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function EditorialItem() {
    return (
        <div className="col">
            <div className={cx('item')}>
                <div className={cx('banner')}>
                    <div className={cx('banner-inner')}>
                        <img src={imgs.EditBanner1} className={cx('banner-img')} />
                    </div>
                </div>
                <div className={cx('info')}>
                    <h3 className={cx('name')}>INTRODUCING: THE 'Meecat DEBUTS' COLLECTION</h3>
                    <p className={cx('desc')}>The New Arrivals to our Artist Community Discuss Their 'Meecat Debuts'</p>
                </div>
            </div>
        </div>
    );
}

export default EditorialItem;
