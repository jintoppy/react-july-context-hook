import { useRef, useState } from "react";
import useSearch from './hooks/useSearch';

const GithubSearch = () => {
    const searchInputRef = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const repos = useSearch(searchTerm);

    const onSearch = () => {
        setSearchTerm(searchInputRef.current.value);
    };

    return (
        <div>
            <input ref={searchInputRef} />
            <button onClick={onSearch}>Search </button>
            {searchTerm}
            {repos.length > 0? (<ul>
                {repos.map(repo => <li>{repo.name}</li>)}
            </ul>) : <h2>No repos</h2>}
        </div>
    )

};

export default GithubSearch;