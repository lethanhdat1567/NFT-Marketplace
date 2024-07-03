import styles from './SearchValue.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/layout/components/Popper';
import Item from '../Item/Item';
import { searchBtn } from '~/assets/icons';

const cx = classNames.bind(styles);

function SearchValue({ children, value, type }) {
    const [searchValue, setSearchValue] = useState('');
    if (type === 'mobile') {
        return (
            <Tippy
                interactive
                hideOnClick={!value}
                placement="bottom-end"
                render={(attrs) => (
                    <>
                        <Tippy
                            visible={searchValue.length > 0}
                            interactive
                            placement="bottom"
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('item-title')}>People</h4>
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <div className={cx('search-wrap')}>
                                    <button className={cx('search-btn')}>{searchBtn()}</button>
                                    <input
                                        placeholder="Search for artworks, collections, artists etc"
                                        className={cx('search-input')}
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Tippy>
                    </>
                )}
            >
                {children}
            </Tippy>
        );
    } else {
        return (
            <Tippy
                interactive
                visible={value.length > 0}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('item-title')}>People</h4>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        );
    }
}

export default SearchValue;
