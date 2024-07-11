import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { imgs } from '~/assets/images';
import { useState } from 'react';
import React from 'react';
const cx = classNames.bind(styles);

function Comment({ children }) {
    // Use React hook
    const [tranform, setTranform] = useState(0);
    console.log(tranform);
    // Handler
    const handleMoveLeft = () => {
        if (tranform >= 0) {
            return;
        } else {
            setTranform(tranform + 75);
        }
    };
    const handleMoveRight = () => {
        if (tranform < -300) {
            return;
        } else {
            setTranform(tranform - 75);
        }
    };
    // return
    return (
        <div className={cx('comment')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>Why creators love Bueno</h2>
                    <div className={cx('wrapper')}>
                        <div className={cx('slice')}>
                            <div className={cx('wrap-btn')}>
                                <button className={cx('arrow-left')} onClick={handleMoveLeft}>
                                    <img src={imgs.arrowComment} className={cx('left-img')} />
                                </button>

                                <button className={cx('arrow-right')} onClick={handleMoveRight}>
                                    <img src={imgs.arrowComment} className={cx('right-img')} />
                                </button>
                            </div>
                        </div>
                        <div className={cx('comment-wrap')}>
                            {/* Render children */}
                            {React.Children.map(children, (child, index) => (
                                <div style={{ transform: `translateX(${tranform}%)` }} className={cx('comment-item')}>
                                    {child}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
