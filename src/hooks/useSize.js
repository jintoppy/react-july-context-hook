import { useEffect, useState } from 'react';

const useSize = () => {
    const [size, setSize] = useState({
                                width: window.innerWidth,
                                height: window.innerHeight
                            });

    useEffect(() => {
        const eventListnr = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', eventListnr);
        //componentWillUnmount
        return () => {
            window.removeEventListener('resize', eventListnr);
        };
    }, []);
    return size;
};

export default useSize;