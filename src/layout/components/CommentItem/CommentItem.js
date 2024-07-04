import { imgs } from '~/assets/images';
import styles from './CommentItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CommentItem({ name, avatar }) {
    return (
        <article className={cx('item')}>
            <div className={cx('info')}>
                <div className={cx('user')}>
                    <h3 className={cx('name')}>{name}</h3>
                    <span className={cx('state')}>The Lobstars</span>
                </div>
                <img src={avatar} className={cx('info-img')} />
            </div>
            <p className={cx('desc')}>
                I find the Bueno Generator really inspiring creatively. You put all your traits into the tool and it
                creates really surprising NFTs.
            </p>
        </article>
    );
}

export default CommentItem;
