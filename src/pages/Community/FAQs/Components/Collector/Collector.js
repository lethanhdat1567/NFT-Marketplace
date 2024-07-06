import classNames from 'classnames/bind';
import styles from './Collector.module.scss';

const cx = classNames.bind(styles);

function Collector({ children, title }) {
    return (
        <div className={cx('inner')}>
            <h2 className={cx('title')}>{title}</h2>
            <div className={cx('item-wrap')}>{children}</div>
        </div>
    );
}

export default Collector;
