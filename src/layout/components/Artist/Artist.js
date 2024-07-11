import styles from './Artist.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function Artist({ decor, head, name, nickname }) {
    // state
    const [follow, setFollow] = useState(false);

    // return
    return (
        <div className={cx('col')}>
            <article className={cx('item')}>
                <img src={decor} className={cx('decor-img')} />
                <div className={cx('header-wrap')}>
                    <img src={head} className={cx('heading-img')} />
                </div>
                <div className={cx('info')}>
                    <div className={cx('user')}>
                        <div className={cx('user-info')}>
                            <span className={cx('name')}>{name}</span>
                            <span className={cx('nickname')}>{nickname}</span>
                        </div>
                        {/* Set following */}
                        {follow ? (
                            <button
                                className={cx('follow-btn', 'follow-btn--active')}
                                onClick={() => setFollow(!follow)}
                            >
                                <span className={cx('following')}>Following</span>
                            </button>
                        ) : (
                            <button className={cx('follow-btn')} onClick={() => setFollow(!follow)}>
                                <span className={cx('follow')}>+ Follow</span>
                            </button>
                        )}
                    </div>
                    <div className={cx('subrice')}>
                        <div className={cx('subrice-info')}>
                            <span className={cx('subrice-text')}>1</span>
                            <span className={cx('subrice-text')}>Created</span>
                        </div>
                        <div className={cx('subrice-info')}>
                            <span className={cx('subrice-text')}>3</span>
                            <span className={cx('subrice-text')}>Followes</span>
                        </div>
                    </div>
                    <p className={cx('desc')}>Doruk Kumkumoğlu is a visual artist and lecturer of design.</p>
                </div>
            </article>
        </div>
    );
}

export default Artist;
