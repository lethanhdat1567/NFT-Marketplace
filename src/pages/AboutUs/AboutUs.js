import { imgs } from '~/assets/images';
import styles from './AboutUs.module.scss';
import classNames from 'classnames/bind';

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
                        <div className="row row-cols-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
