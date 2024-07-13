import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { imgs } from '~/assets/images';
const cx = classNames.bind(styles);
export const PrevArrow = (props) => (
    <button {...props} className={cx('arrow-left')}>
        <img src={imgs.arrowComment} className={cx('left-img')} alt="Left Arrow" />
    </button>
);
export const NextArrow = (props) => (
    <button {...props} className={cx('arrow-right')}>
        <img src={imgs.arrowComment} className={cx('right-img')} alt="Right Arrow" />
    </button>
);
