import { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import SearchValue from './SearchValue';
import { searchBtn } from '~/assets/icons';
const cx = classNames.bind(styles);

function Search({ type }) {
    const [searchValue, setSearchValue] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    if (type === 'mobile') {
        return (
            <SearchValue type={type} value={isSearch}>
                <div
                    onClick={() => {
                        setIsSearch(!isSearch);
                    }}
                    type={type}
                    className={cx('search-mobile')}
                >
                    <button className={cx('search-btn-mobile')}>{searchBtn()}</button>
                </div>
            </SearchValue>
        );
    } else {
        return (
            <SearchValue value={searchValue}>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>{searchBtn()}</button>
                    <input
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search for artworks, collections, artists etc"
                    />
                </div>
            </SearchValue>
        );
    }
}

export default Search;
