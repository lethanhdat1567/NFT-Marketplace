import Button from '~/layout/components/Button';
import styles from './Collection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Collection({ children }) {
    return (
        <div className={cx('collection')}>
            <div className={cx('container')}>
                <div className={cx('inenr')}>
                    <div className={cx('heading-wrap')}>
                        <span className={cx('curated')}>CURATED COLLECTION</span>
                        <Button to={`${process.env.REACT_APP_BASE_ROOT}collection`} text>
                            View all
                        </Button>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-1 ">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
