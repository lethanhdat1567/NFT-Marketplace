import { faFacebookF, faInstagram, faSquareFacebook, faThreads } from '@fortawesome/free-brands-svg-icons';
import styles from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { imgs } from '~/assets/images';
import Item from './Components/Items';

const cx = classNames.bind(styles);

function BlogDetail() {
    return (
        <div className={cx('blog')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('heading')}>
                        <div className="row row-cols-2 row-cols-lg-1">
                            <div className="col">
                                <div className={cx('banner')}>
                                    <div className={cx('banner-inner')}>
                                        <img src={imgs.BlogDetailBanner} className={cx('banner-img')} />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('info')}>
                                    <span className={cx('timmer')}>User Stories-6minute read</span>
                                    <h3 className={cx('title')}>
                                        Ethereal Avatars: A Traditional Folktale Gets a Makeover in Web3
                                    </h3>
                                    <span className={cx('owner')}>ByGabriela Ross</span>
                                    <div className={cx('contact')}>
                                        <span className={cx('follow')}>Follow :</span>
                                        <div className={cx('icons')}>
                                            <Link to="/" className={cx('icon')}>
                                                <FontAwesomeIcon className={cx('icon-img')} icon={faFacebookF} />
                                            </Link>
                                            <Link to="/" className={cx('icon')}>
                                                <FontAwesomeIcon className={cx('icon-img')} icon={faInstagram} />
                                            </Link>
                                            <Link to="/" className={cx('icon')}>
                                                <FontAwesomeIcon className={cx('icon-img')} icon={faThreads} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Item />
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
