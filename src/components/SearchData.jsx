import { useEffect, useRef } from "react";

const SearchData = ({setLocation}) => {
    const inputRef = useRef();

    const handlerClick = () => {
        let inputValue = inputRef.current.value;

        if(inputValue == '' ) {
            inputValue = Math.floor(Math.random() * 100);
        }
        const url = `https://rickandmortyapi.com/api/location/${inputValue}`;

        fetch(url)
            .then((res)=> {
                return res.json()
            })
            .then((data) => {
                setLocation(data)
            })
    }

    useEffect(()=> {
        handlerClick();
    }, []);

    return <>
        <div className="search-data">
            <input ref={inputRef} type="text" placeholder="type a location id" />
            <button onClick={handlerClick}>Search</button>
        </div>
    </>;
};
export default SearchData;

