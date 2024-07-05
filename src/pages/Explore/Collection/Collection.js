import styles from './Collection.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '~/assets/images';
import CollectCard from '~/layout/components/CollectCard';
import { arrowDown } from '~/assets/icons';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/layout/components/Popper';
import { Link } from 'react-router-dom';
import 'tippy.js/animations/shift-away.css';
const cx = classNames.bind(styles);

function Collection() {
    return (
        <div className={cx('collection')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('filter')}>
                        <span className={cx('sort')}>Sort by:</span>
                        <Tippy
                            placement="bottom-end"
                            interactive
                            render={(attrs) => (
                                <div className={cx('dropdown')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <ul className={cx('drop-items')}>
                                            <li className={cx('drop-item')}>
                                                <Link className={cx('drop-link')}>Trending</Link>
                                            </li>
                                            <li className={cx('drop-item')}>
                                                <Link className={cx('drop-link')}>Date created - Newest</Link>
                                            </li>
                                            <li className={cx('drop-item')}>
                                                <Link className={cx('drop-link')}>Date created - Oldest</Link>
                                            </li>
                                        </ul>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('wrap')}>
                                <span className={cx('type')}>Trending</span>
                                <span className={cx('arrow')}> {arrowDown()}</span>
                            </div>
                        </Tippy>
                    </div>
                    <div className={cx('items')}>
                        <div className="row row-cols-2 row-cols-lg-1">
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect1}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect2}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect3}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect4}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect1}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect2}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect3}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect4}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect1}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect2}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect3}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect4}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect1}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect2}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect3}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatar}
                                user="@alaxgender"
                                background={imgs.collect4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
