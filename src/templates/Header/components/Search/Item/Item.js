import styles from './Item.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { imgs } from '~/assets/images';
import Img from '~/assets/images/Img/Img';
const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <Link to="profile">
            <div className={cx('wrap')}>
                <Img src={data.avatar} className={cx('img')} />
                <div className={cx('info')}>
                    <span className={cx('name')}>{data.full_name}</span>
                    <p className={cx('nickname')}>{data.nickname}</p>
                </div>
            </div>
        </Link>
    );
}

export default Item;
