import { imgs } from '~/assets/images';
import styles from './FeatureEdit.module.scss';
import classNames from 'classnames/bind';
import Button from '~/layout/components/Button';

const cx = classNames.bind(styles);

function FeatureEdit() {
    return (
        <div className={cx('feature')}>
            <div className={cx('heading')}>
                <h2 className={cx('title')}>Featured Creators</h2>
                <Button className={cx('main')} text>
                    View All
                </Button>
            </div>
            <div className="row row-cols-4 row-cols-lg-2 g-2">
                <div className="col">
                    <img src={imgs.FeatureEdit1} className={cx('img')} />
                </div>
                <div className="col">
                    <img src={imgs.FeatureEdit1} className={cx('img')} />
                </div>
                <div className="col">
                    <img src={imgs.FeatureEdit1} className={cx('img')} />
                </div>
                <div className="col">
                    <img src={imgs.FeatureEdit1} className={cx('img')} />
                </div>
            </div>
            <Button text className={cx('respon')}>
                View All
            </Button>
        </div>
    );
}

export default FeatureEdit;
