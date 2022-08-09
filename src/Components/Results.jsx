import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultContextProvider";
import Loading from "./Loading";

export default function Results() {
    const {results, isLoading, searchTerm, getResults} = useResultContext();
    const location = useLocation();

    useEffect( () => {
        getResults("/search/q=Friderikusz Podcast&num=20")
    }, [])

    if (isLoading) {
        return <Loading />;
    }

    switch (location.pathname) {
        case "/search":
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map( ({ link, title }, index ) => (
                        <div key={index} className="w-full md:w-2/5">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className="text-lg hover:underline text-blue-700 dark:text-blue-300">
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case "/images":
            return "SEARCH";
        case "/news":
            return "SEARCH";
        case "/videos":
            return "SEARCH";
        default:
            return "ERROR!";
    }
}