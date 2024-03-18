import { useState, useEffect } from 'react';

const useDebouncedOnChange = (onChange: any, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onChange(debouncedValue);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [debouncedValue, onChange, delay]);

    return (event: any) => {
        setDebouncedValue(event.target.value);
    };
};

export default useDebouncedOnChange;
