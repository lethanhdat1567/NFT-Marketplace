import styles from './Creator.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Creator({ children }) {
    return (
        <div className={cx('creator')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>How to be a creator</h2>
                    <div className={cx('row row-cols-4 row-cols-lg-2 g-3 g-md-1')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Creator;
