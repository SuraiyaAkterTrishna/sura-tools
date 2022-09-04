import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://thawing-mesa-46610.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return [tools, setTools];
};

export default useTools;