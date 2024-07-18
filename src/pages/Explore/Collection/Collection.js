import styles from './Collection.module.scss';
import classNames from 'classnames/bind';
import { imgs } from '~/assets/images';
import CollectCard from '~/layout/components/CollectCard';
import { arrowDown } from '~/assets/icons';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/layout/components/Popper';
import { Link } from 'react-router-dom';
import 'tippy.js/animations/shift-away.css';
import ShortBy from '~/layout/components/ShortBy';
const cx = classNames.bind(styles);

function Collection() {
    const MenuItems = ['Trending', 'Date created - Newest', 'Date created - Oldest'];
    return (
        <div className={cx('collection')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('filter')}>
                        <ShortBy MenuItems={MenuItems} />
                    </div>
                    <div className={cx('items')}>
                        <div className="row row-cols-2 row-cols-lg-1 g-xl-4 g-md-1">
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava1}
                                user="@alaxgender"
                                background={imgs.collect1}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava2}
                                user="@alaxgender"
                                background={imgs.collect2}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avagr1}
                                user="@alaxgender"
                                background={imgs.col1}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avagr2}
                                user="@alaxgender"
                                background={imgs.collect4}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatarComment}
                                user="@alaxgender"
                                background={imgs.col2}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatarComment1}
                                user="@alaxgender"
                                background={imgs.col3}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.teamAvatar}
                                user="@alaxgender"
                                background={imgs.collect3}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava1}
                                user="@alaxgender"
                                background={imgs.col4}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava1}
                                user="@alaxgender"
                                background={imgs.col5}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava3}
                                user="@alaxgender"
                                background={imgs.col6}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava2}
                                user="@alaxgender"
                                background={imgs.col7}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avatarComment}
                                user="@alaxgender"
                                background={imgs.col8}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.ava1}
                                user="@alaxgender"
                                background={imgs.col9}
                            />
                            <CollectCard
                                name="ALTERNATE MEDIUM SPACE"
                                avatar={imgs.avagr2}
                                user="@alaxgender"
                                background={imgs.col10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
