import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function Comment({ children }) {
    return (
        <div className={cx('comment')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>Why creators love Bueno</h2>
                    <div className={cx('comment-wrap')}>{children}</div>
                    <div className={cx('slice')}>
                        <div className={cx('wrap-btn')}>
                            <button className={cx('arrow-left')}>
                                <img src={imgs.arrowComment} className={cx('left-img')} />
                            </button>
                            <div className={cx('slice-wrap')}>
                                <div className={cx('item', 'active')}></div>
                                <div className={cx('item')}></div>
                                <div className={cx('item')}></div>
                                <div className={cx('item')}></div>
                            </div>
                            <button className={cx('arrow-right')}>
                                <img src={imgs.arrowComment} className={cx('right-img')} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
