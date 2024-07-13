import styles from './SearchValue.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/layout/components/Popper';
import Item from '../Item/Item';
import { searchBtn } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchorCircleXmark, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/Hooks/Debounce';
import * as searchService from '~/apiService/searchService';
const cx = classNames.bind(styles);

function SearchValue({ children, value, type, showResult, setShowResult }) {
    const [searchValue, setSearchValue] = useState('');
    const inputMobile = useRef();
    const [searchResult, setSearchResult] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500);
    // Mobile
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        const fetchApi = async () => {
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setShowLoading(false);
        };
        fetchApi();
    }, [debounce]);

    if (type === 'mobile') {
        return (
            <Tippy
                interactive
                hideOnClick={!value}
                placement="bottom-end"
                render={(attrs) => (
                    <>
                        <Tippy
                            visible={showResult && searchResult.length > 0}
                            interactive
                            placement="bottom"
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('item-title')}>People</h4>
                                        {searchResult.map((result) => (
                                            <Item setSearchResult={setShowResult} data={result} />
                                        ))}
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
                                        ref={inputMobile}
                                    />
                                    {!!searchValue && !showLoading && (
                                        <button
                                            className={cx('clear')}
                                            onClick={() => {
                                                setSearchValue('');
                                                inputMobile.current.focus();
                                                setSearchResult([]);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    )}
                                    {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
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
                visible={showResult && value.length > 0}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('item-title')}>People</h4>
                            {value.map((data) => (
                                <Item setSearchResult={setShowResult} key={data.id} data={data} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                {children}
            </Tippy>
        );
    }
}

export default SearchValue;
