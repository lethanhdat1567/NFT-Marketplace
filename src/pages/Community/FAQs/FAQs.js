import classNames from 'classnames/bind';
import styles from './FAQs.module.scss';
import CollectorItem from './Components/Collector/CollectorItem';
import Collector from './Components/Collector';
import Subscribe from '~/pages/Home/components/Subscribe';
import { imgs } from '~/assets/images';

const cx = classNames.bind(styles);

function FAQs() {
    return (
        <>
            <div className={cx('FAQs')}>
                <div className="container">
                    <div className={cx('heading')}>
                        <h1 className={cx('title')}>FAQs</h1>
                        <p className={cx('desc')}>
                            You’ll find answers to most questions about Meecat, our community, and our products in the
                            FAQ section.
                        </p>
                    </div>
                    <Collector title={'Collectors'}>
                        <CollectorItem />
                        <CollectorItem />
                        <CollectorItem />
                    </Collector>
                    <Collector title={'General'}>
                        <CollectorItem />
                        <CollectorItem />
                        <CollectorItem />
                    </Collector>
                    <Collector title={'Artists'}>
                        <CollectorItem />
                        <CollectorItem />
                        <CollectorItem />
                    </Collector>
                </div>
            </div>
            <Subscribe banner={imgs.FAQsub}></Subscribe>
        </>
    );
}

export default FAQs;
