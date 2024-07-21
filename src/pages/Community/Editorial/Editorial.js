import styles from './Editorial.module.scss';
import classNames from 'classnames/bind';
import { arrowDown } from '~/assets/icons';
import EditorialItem from './Components/Item/EditorialItem';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/layout/components/Popper';
import FeatureEdit from './Components/FeatureEdit';
import Subscribe from '~/pages/Home/components/Subscribe';
import { imgs } from '~/assets/images';
import { useState } from 'react';
import { EditorialItems } from '~/cloneData/cloneData';

const cx = classNames.bind(styles);

function Editorial() {
    // State Hook
    const [activeNav, setActiveNav] = useState(0);
    // Handler
    const handleNav = (index) => {
        setActiveNav(index);
    };
    return (
        <div className={cx('edit')}>
            <div className="container">
                <div className={cx('inner')}>
                    <h1 className={cx('heading')}>Inside editorial</h1>
                    <ul className={cx('list')}>
                        <li onClick={() => handleNav(0)} className={cx('item', { active: activeNav === 0 })}>
                            <Link className={cx('item-link')}>ALL</Link>
                        </li>
                        <li onClick={() => handleNav(1)} className={cx('item', { active: activeNav === 1 })}>
                            <Link className={cx('item-link')}>DIGITAL FASHION</Link>
                        </li>
                        <li onClick={() => handleNav(2)} className={cx('item', { active: activeNav === 2 })}>
                            <Link className={cx('item-link', 'responsive1')}>DIGITAL ART</Link>
                        </li>
                        <li onClick={() => handleNav(3)} className={cx('item', { active: activeNav === 3 })}>
                            <Link className={cx('item-link', 'responsive1')}>PHYGITAL</Link>
                        </li>
                        <li onClick={() => handleNav(4)} className={cx('item', { active: activeNav === 4 })}>
                            <Link className={cx('item-link', 'responsive')}>INTERIORS</Link>
                        </li>
                        <li onClick={() => handleNav(5)} className={cx('item', { active: activeNav === 5 })}>
                            <Link className={cx('item-link', 'responsive')}>COLLECTIONS</Link>
                        </li>
                        <li onClick={() => handleNav(6)} className={cx('item', { active: activeNav === 6 })}>
                            <Link className={cx('item-link', 'responsive')}>CULTURE</Link>
                        </li>
                        <Tippy
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className={cx('dropdown')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <ul className={cx('drop-items')}>
                                            <li className={cx('drop-item')}>
                                                <Link className={cx('drop-link')}>INTERIORS</Link>
                                            </li>
                                            <li className={cx('drop-item')}>
                                                <Link className={cx('drop-link')}>COLLECTIONS</Link>
                                            </li>
                                            <li className={cx('drop-item')}>
                                                <Link className={cx('drop-link')}>CULTURE</Link>
                                            </li>
                                            <li className={cx('drop-item', 'respon')}>
                                                <Link className={cx('drop-link', 'respon')}>DIGITAL ART</Link>
                                            </li>
                                            <li className={cx('drop-item', 'respon')}>
                                                <Link className={cx('drop-link', 'respon')}>PHYGITAL</Link>
                                            </li>
                                        </ul>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('more')}>
                                <span className={cx('more-text', 'responsive')}>More</span>
                                {arrowDown()}
                            </div>
                        </Tippy>
                    </ul>
                    <div className={cx('wrap-items')}>
                        <div className="row row-cols-2 row-cols-md-1 g-4">
                            {EditorialItems[activeNav].map((item, index) => (
                                <EditorialItem banner={item.banner} title={item.title} desc={item.desc} key={index} />
                            ))}
                        </div>
                    </div>
                    <FeatureEdit></FeatureEdit>
                </div>
            </div>
            <Subscribe banner={imgs.collect2}></Subscribe>
        </div>
    );
}

export default Editorial;
