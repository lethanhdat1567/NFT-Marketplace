import { imgs } from '~/assets/images';
import styles from './Community.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
const cx = classNames.bind(styles);

function Community() {
    const comunities = [
        {
            classNames: 'decor-1',
            img: imgs.Commu1,
        },
        {
            classNames: 'decor-2',
            img: imgs.Commu2,
        },
        {
            classNames: 'decor-3',
            img: imgs.Commu3,
        },
        {
            classNames: 'decor-4',
            img: imgs.Commu4,
        },
        {
            classNames: 'decor-5',
            img: imgs.Commu5,
        },
    ];
    return (
        <div className={cx('community')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h2 className={cx('title')}>Join leargest NFT community</h2>
                    <p className={cx('desc')}>
                        Join the millions of creators, collectors, and curators who are on this journey with you.
                    </p>
                    <div className={cx('wrap-img')}>
                        <div className={cx('img-inner')}>
                            <Link>
                                <img src={imgs.CommuBanner} className={cx('decor')} />
                            </Link>

                            <Link>
                                {/* <Tippy placement="bottom" content="Create your account!!" className={cx('create')}>
                                    <img className={cx('decor-1')} src={imgs.Commu1} title="Create use" />
                                </Tippy> */}
                                {comunities.map((item, index) => {
                                    return (
                                        <Tippy
                                            placement="bottom"
                                            content="Create your account!!"
                                            className={cx('create')}
                                            animation="scale"
                                        >
                                            <img className={cx(item.classNames)} src={item.img} title="Create use" />
                                        </Tippy>
                                    );
                                })}
                            </Link>

                            {/* <Link>
                                <img className={cx('decor-2')} src={imgs.Commu2} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-3')} src={imgs.Commu3} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-4')} src={imgs.Commu4} title="Create use" />
                            </Link>
                            <Link>
                                <img className={cx('decor-5')} src={imgs.Commu5} title="Create use" />
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;
