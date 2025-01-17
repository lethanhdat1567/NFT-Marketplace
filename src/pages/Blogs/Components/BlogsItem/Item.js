import { faFacebookF, faInstagram, faSquareFacebook, faThreads } from '@fortawesome/free-brands-svg-icons';
import { imgs } from '~/assets/images';
import styles from './BlogsItem.module.scss';
import classNames from 'classnames/bind';
import Button from '~/layout/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Item({ title, img, avatar }) {
    return (
        <div className="col">
            <div className={cx('item')}>
                <Link to="/blogsdetail">
                    <div className={cx('banner')}>
                        <img src={img} className={cx('banner-img')} />
                        <div className={cx('user')}>
                            <img src={avatar} className={cx('user-img')} />
                            <span className={cx('user-name')}>Courtney Henry</span>
                        </div>
                    </div>
                </Link>
                <div className={cx('info')}>
                    <span className={cx('timer')}>5 min to read</span>
                    <Link to={'/blogsdetail'}>
                        <h4 className={cx('info-name')}>{title}</h4>
                    </Link>
                </div>
                <Button to="/blogsdetail" rounded className={cx('btn')}>
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default Item;
