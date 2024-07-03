import { imgs } from '~/assets/images';
import styles from './CreatorItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CreatorItem({ img, title, desc }) {
    return (
        <div className="col">
            <div className={cx('item')}>
                <Link to="/">
                    <img className={cx('item-img')} src={img} />
                </Link>
                <Link to="/">
                    <h3 className={cx('name')}>{title}</h3>
                </Link>
                <p className={cx('desc')}>{desc}</p>
            </div>
        </div>
    );
}

export default CreatorItem;
