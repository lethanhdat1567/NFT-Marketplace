import classNames from 'classnames/bind';
import styles from './MeeCat.module.scss';

const cx = classNames.bind(styles);

function MeeCat({ children }) {
    return (
        <div className={cx('meecat')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>Meecat collecttibles</h2>
                    <div className="row row-cols-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default MeeCat;
