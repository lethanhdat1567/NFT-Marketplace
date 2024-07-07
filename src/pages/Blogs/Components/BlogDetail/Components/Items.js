import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import Item1 from './Items/Item1';
import Item2 from './Items/Item2';
import Item3 from './Items/Item3';
import BlogsItem from '../../BlogsItem';
import Item from '../../BlogsItem/Item';
import Button from '~/layout/components/Button';
import { arrowDown } from '~/assets/icons';
const cx = classNames.bind(styles);
function Items() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Item1 />
                <Item2 />
                <Item3 />
            </div>
            <BlogsItem>
                <Item />
                <Item />
                <Item />
            </BlogsItem>
            <Button className={cx('btn-more')} rightIcon={arrowDown()}>
                View All Blogs
            </Button>
        </>
    );
}

export default Items;
