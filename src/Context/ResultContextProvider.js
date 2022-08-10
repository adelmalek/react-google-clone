import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("Tupac");

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '389c5f529amshd6b10eaed732288p1f3f7cjsne88cfa04193e',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            } 
        })

        const data = await response.json();

        if (type.includes("/news")) {
            setResults(data.entries)
        } else if (type.includes("/image")) {
            setResults(data.image_results)
        } else {
            setResults(data.results)
        }

        setIsLoading(false);
    };

    return (
        <ResultContext.Provider value={ {getResults, results, isLoading, searchTerm, setSearchTerm} }>
            {children}
        </ResultContext.Provider>
    )
};

export const useResultContext = () => useContext(ResultContext);