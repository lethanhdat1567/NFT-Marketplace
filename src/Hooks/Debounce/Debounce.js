import { useEffect, useState } from 'react';

function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const TimeOutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(TimeOutId);
        };
    }, [value]);
    return debounceValue;
}

export default Debounce;
