import { imgs } from '~/assets/images';
import styles from '../Items.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Item3() {
    return (
        <div className={cx('item')}>
            <div className="row row-cols-2">
                <div className="col">
                    <img src={imgs.SubBannerBlog1} className={cx('sub-banner')} />
                </div>
                <div className="col">
                    <img src={imgs.SubBannerBlog2} className={cx('sub-banner')} />
                </div>
            </div>
            <h2 className={cx('title')}>Creativity has no rules in the metaverse</h2>
            <p className={cx('desc')}>
                We're excited to see where this new project is going, and we want some of you aspiring artists and
                creators out there, to remember that success isn't limited.
                <br />
                <br />
                Artists will continue to use crypto and blockchain as a way to tell their stories, and express
                themselves in new, exciting ways. Even the smallest acts can have enormous consequences. It illustrates
                that you never know what's going to happen when you throw someone into an entirely new world.
            </p>
        </div>
    );
}

export default Item3;
