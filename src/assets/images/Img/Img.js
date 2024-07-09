import { forwardRef, useState } from 'react';
import { imgs } from '..';
import classNames from 'classnames';
import styles from './Img.module.scss';
function Img({ src, alt, className, ...props }, ref) {
    const handleError = () => {
        setFallback(imgs.unsetImg);
    };
    const [fallback, setFallback] = useState('');
    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Img);
