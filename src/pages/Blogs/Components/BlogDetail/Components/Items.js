import classNames from 'classnames/bind';
import styles from './Items.module.scss';
import Item1 from './Items/Item1';
import Item2 from './Items/Item2';
import Item3 from './Items/Item3';
import BlogsItem from '../../BlogsItem';
import Item from '../../BlogsItem/Item';
import Button from '~/layout/components/Button';
import { arrowDown } from '~/assets/icons';
import { useState } from 'react';
import { imgs } from '~/assets/images';
const cx = classNames.bind(styles);
function Items() {
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
    // State Hook
    const [more, setMore] = useState(false);
    // handler
    const handleMore = () => {
        let items = [];
        for (let i = 0; i < 3; i++) {
            items.push(
                <Item avatar={blogsItems[i].avatar} title={blogsItems[i].title} img={blogsItems[i].img} key={i} />,
            );
        }
        return items;
    };
    return (
        <>
            <div className={cx('wrapper')}>
                <Item1 />
                <Item2 />
                <Item3 />
            </div>
            {more ? (
                <BlogsItem more={more}>
                    {blogsItems.map((item, index) => (
                        <Item avatar={item.avatar} title={item.title} img={item.img} key={index} />
                    ))}
                </BlogsItem>
            ) : (
                <BlogsItem more={more}>{handleMore()}</BlogsItem>
            )}
            <Button onClick={() => setMore(!more)} className={cx('btn-more')} rightIcon={arrowDown()}>
                View {more ? 'Less' : 'More'} Blogs
            </Button>
        </>
    );
}

export default Items;
