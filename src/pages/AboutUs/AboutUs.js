import { imgs } from '~/assets/images';
import styles from './AboutUs.module.scss';
import classNames from 'classnames/bind';
import UserItem from '~/layout/components/UserItem';
import Subscribe from '../Home/components/Subscribe';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('about')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('heading-wrap')}>
                        <h1 className={cx('heading')}>Where art meets Team</h1>
                        <p className={cx('desc')}>
                            You’ll find answers to most questions about Meecat, our community, and our products in the
                            FAQ section.
                        </p>
                    </div>
                    <div className={cx('content')}>
                        <div className="row row-cols-lg-1">
                            <div className="col col-7">
                                <div className={cx('info')}>
                                    <h2 className={cx('title')}>We believe in the power of creators.</h2>
                                    <div className={cx('banner-respon-wrap')}>
                                        <figure className={cx('banner-respon')}>
                                            <img className={cx('banner-img-respone')} src={imgs.AboutRespon} />
                                        </figure>
                                    </div>
                                    <p className={cx('info-desc')}>
                                        Web3 is changing the world as we know it.
                                        <br />
                                        <br /> We’re seeing the start of a decentralized digital space where art,
                                        videos, writing, and other forms of creativity can be bought and sold on the
                                        blockchain—and we want to help everyone launch their own NFTs.
                                        <br /> <br />
                                        Most creators don't have access to a dev team or hours of studying code to turn
                                        digital art into tokens. That’s why we are committed to create the tools to make
                                        it easier, more accessible, and seamless for creators to enter this new space.
                                    </p>
                                </div>
                            </div>
                            <div className="col col-5">
                                <div className={cx('banner')}>
                                    <img src={imgs.aboutBanner} className={cx('banner-img')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('team')}>
                        <h2 className={cx('team-title')}>Our team</h2>
                        <div className="row row-cols-3 row-cols-lg-2 row-cols-md-1 gy-3">
                            <UserItem ab={imgs.teamBanner} aba={imgs.teamAvatar} />
                            <UserItem ab={imgs.ab1} aba={imgs.aba1} />
                            <UserItem ab={imgs.ab2} aba={imgs.aba2} />
                            <UserItem ab={imgs.ab3} aba={imgs.aba3} />
                            <UserItem ab={imgs.ab4} aba={imgs.aba4} />
                            <UserItem ab={imgs.ab5} aba={imgs.aba5} />
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe banner={imgs.subAbout}></Subscribe>
        </div>
    );
}

export default AboutUs;
