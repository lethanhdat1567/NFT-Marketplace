import { minus, plus } from '~/assets/icons';
import styles from './Collector.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CollectorItem({ title, desc, index }) {
    const [active, setActive] = useState(false);
    return (
        <>
            {/* active */}
            <div className={cx('wrapper-item', { active: active })}>
                <div className={cx('item')}>
                    <div className={cx('heading')}>
                        <div className={cx('title-wrap')}>
                            <span className={cx('ranked')}>0{index + 1}.</span>
                            <span className={cx('title-item')}>{title}</span>
                        </div>
                        {/* active */}
                        <button onClick={() => setActive(!active)} className={cx('more-btn', { active: active })}>
                            <span className={cx('more-minus')}> {minus()}</span>
                            <span className={cx('more-plus')}>{plus()}</span>
                        </button>
                    </div>
                </div>
                <div className={cx('info')}>
                    <p className={cx('desc')}>{desc}</p>
                </div>
            </div>
        </>
    );
}

export default CollectorItem;
