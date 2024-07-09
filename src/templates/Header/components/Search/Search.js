import { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import SearchValue from './SearchValue';
import { searchBtn } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchorCircleXmark, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/Hooks/Debounce';
const cx = classNames.bind(styles);

function Search({ type }) {
    const [searchValue, setSearchValue] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResult(data.data);
                setShowLoading(false);
            })
            .catch(() => {
                setShowLoading(false);
            });
    }, [debounce]);

    if (type === 'mobile') {
        return (
            <SearchValue type={type} value={isSearch} showResult={showResult} setShowResult={setShowResult}>
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
            <SearchValue showResult={showResult} setShowResult={setShowResult} value={searchResult}>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>{searchBtn()}</button>
                    <input
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search for artworks, collections, artists etc"
                        ref={inputRef}
                    />
                    {!!searchValue && !showLoading && (
                        <button
                            onClick={() => {
                                setSearchValue('');
                                setSearchResult([]);
                                inputRef.current.focus();
                            }}
                            className={cx('clear')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                </div>
            </SearchValue>
        );
    }
}

export default Search;
