import styles from './BlogsItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function BlogsItem({ children, more }) {
    return (
        <div className={cx('items-wrap', { more: more })}>
            <div className="row row-cols-3 row-cols-lg-2 row-cols-sm-1 g-4">{children}</div>
        </div>
    );
}

export default BlogsItem;
