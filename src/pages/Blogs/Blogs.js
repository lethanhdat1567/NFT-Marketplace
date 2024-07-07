import styles from './Blogs.module.scss';
import classNames from 'classnames/bind';
import BlogsItem from './Components/BlogsItem';
import Item from './Components/BlogsItem/Item';
import Button from '~/layout/components/Button';
import { imgs } from '~/assets/images';
import { arrowDown, arrowRight } from '~/assets/icons';
import Comment from '../Home/components/Comment';
import CommentItem from '~/layout/components/CommentItem';

const cx = classNames.bind(styles);

function Blogs() {
    return (
        <div className={cx('blogs')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h1 className={cx('heading')}>Discover populer articles here.</h1>
                    <p className={cx('desc')}>
                        All the articles and contents of the site have been updated today and you can find yoour
                        articles and contants quickly
                    </p>
                    <BlogsItem>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </BlogsItem>
                    <Button className={cx('btn-more')} rightIcon={arrowDown()}>
                        Load more
                    </Button>
                </div>
            </div>
            <Comment>
                <CommentItem name="Philip Colbert" avatar={imgs.avatarComment} />
                <CommentItem name="Robart Foden" avatar={imgs.avatarComment1} />
                <CommentItem name="Philip Colbert" avatar={imgs.avatarComment} />
                <CommentItem name="Robart Foden" avatar={imgs.avatarComment1} />
            </Comment>
        </div>
    );
}

export default Blogs;
