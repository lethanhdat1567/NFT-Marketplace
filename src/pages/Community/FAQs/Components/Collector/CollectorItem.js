import { minus, plus } from '~/assets/icons';
import styles from './Collector.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CollectorItem() {
    return (
        <>
            {/* active */}
            <div className={cx('wrapper-item')}>
                <div className={cx('item')}>
                    <div className={cx('heading')}>
                        <div className={cx('title-wrap')}>
                            <span className={cx('ranked')}>01.</span>
                            <span className={cx('title-item')}>Creating a MetaMask Wallet in Five Steps</span>
                        </div>
                        {/* active */}
                        <button className={cx('more-btn')}>
                            <span className={cx('more-minus')}> {minus()}</span>
                            <span className={cx('more-plus')}>{plus()}</span>
                        </button>
                    </div>
                </div>
                <div className={cx('info')}>
                    <p className={cx('desc')}>
                        MetaMask wallets are crypto wallets that can be used to store crypto funds, NFTs and digital
                        collectibles. Think of a crypto wallet as a personal safe in which your precious digital
                        possessions can be safely stored.
                    </p>
                </div>
            </div>
        </>
    );
}

export default CollectorItem;
