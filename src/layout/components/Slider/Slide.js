import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CommentItem from '../CommentItem';
import Comment from '~/pages/Home/components/Comment';
import { imgs } from '~/assets/images';
import { useRef } from 'react';
const cx = classNames.bind(styles);
function Slide() {
    const slickRef = useRef(null);
    // Data
    const comments = [
        {
            name: 'Philip Colbert',
            avatar: imgs.avatarComment,
        },
        {
            name: 'Robart Foden',
            avatar: imgs.avatarComment1,
        },
        {
            name: 'Philip Colbert',
            avatar: imgs.avatarComment,
        },
        {
            name: 'Robart Foden',
            avatar: imgs.avatarComment1,
        },
    ];
    // Slick
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => <ul className={cx('dots')}>{dots}</ul>,
    };
    return (
        <div className={cx('comment')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>Why creators love Bueno</h2>
                    <div className={cx('wrapper')}>
                        <div className={cx('slice')}>
                            <div className={cx('wrap-btn')}>
                                <button onClick={() => slickRef.current.slickPrev()} className={cx('arrow-left')}>
                                    <img src={imgs.arrowComment} className={cx('left-img')} alt="Left Arrow" />
                                </button>
                                <button onClick={() => slickRef.current.slickNext()} className={cx('arrow-right')}>
                                    <img src={imgs.arrowComment} className={cx('right-img')} alt="Right Arrow" />
                                </button>
                            </div>
                        </div>
                        <div className={cx('slider')}>
                            <Slider ref={slickRef} {...settings}>
                                {comments.map((item, index) => {
                                    return <CommentItem key={index} name={item.name} avatar={item.avatar} />;
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide;
