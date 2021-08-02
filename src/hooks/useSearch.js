import { useState, useEffect } from 'react';

const useSearch = (searchTerm) => {
    const [repos, setRepos] = useState([]);

    const searchGithub = async () => {
        const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}`);
        const searchResult = await response.json();
        setRepos(searchResult.items);
    };

    useEffect(() => {
        if(searchTerm){
            searchGithub();
        }
    }, [searchTerm]);

    return repos;
};

export default useSearch;