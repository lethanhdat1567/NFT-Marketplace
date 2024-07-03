import classNames from 'classnames/bind';
import styles from './Feature.module.scss';

const cx = classNames.bind(styles);

function Feature({ children }) {
    return (
        <div className={cx('feature')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h4 className={cx('title')}>Featured artists</h4>
                    <div className="row row-cols-3 row-cols-md-1 gy-4">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
