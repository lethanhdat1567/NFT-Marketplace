import styles from './Blogs.module.scss';
import classNames from 'classnames/bind';
import BlogsItem from './Components/BlogsItem';
import Item from './Components/BlogsItem/Item';
import Button from '~/layout/components/Button';
import { imgs } from '~/assets/images';
import { arrowDown, arrowRight } from '~/assets/icons';
import Comment from '../Home/components/Comment';
import CommentItem from '~/layout/components/CommentItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Blogs() {
    // data
    const blogsItems = [
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b1,
            avatar: imgs.ba1,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b2,
            avatar: imgs.ba2,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b3,
            avatar: imgs.ba3,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b4,
            avatar: imgs.ba4,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b5,
            avatar: imgs.ba5,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b6,
            avatar: imgs.ba6,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b7,
            avatar: imgs.ba7,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b8,
            avatar: imgs.ba8,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b9,
            avatar: imgs.ba9,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b10,
            avatar: imgs.ba10,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b11,
            avatar: imgs.ba11,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b12,
            avatar: imgs.ba12,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b13,
            avatar: imgs.ba13,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b14,
            avatar: imgs.ba14,
        },
        {
            title: 'Awesome NFT Projects That Aren’t PFP Collections',
            img: imgs.b15,
            avatar: imgs.ba15,
        },
    ];
    // State hook
    const [more, setMore] = useState(false);
    // Handler
    const handleHeight = () => {
        setMore(!more);
        if (more === true) {
            window.scrollTo({ top: '1000', behavior: 'smooth' });
        }
    };
    const handleMore = () => {
        let items = [];
        for (let i = 0; i < 6; i++) {
            items.push(
                <Item avatar={blogsItems[i].avatar} title={blogsItems[i].title} img={blogsItems[i].img} key={i} />,
            );
        }
        return items;
    };
    // Return html
    return (
        <div className={cx('blogs')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h1 className={cx('heading')}>Discover populer articles here.</h1>
                    <p className={cx('desc')}>
                        All the articles and contents of the site have been updated today and you can find yoour
                        articles and contants quickly
                    </p>
                    {more ? (
                        <BlogsItem more={more}>
                            {blogsItems.map((item, index) => (
                                <Item avatar={item.avatar} title={item.title} img={item.img} key={index} />
                            ))}
                        </BlogsItem>
                    ) : (
                        <BlogsItem more={more}>{handleMore()}</BlogsItem>
                    )}

                    <Button onClick={() => handleHeight()} className={cx('btn-more')} rightIcon={arrowDown()}>
                        Load {more ? 'less' : 'more'}
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
