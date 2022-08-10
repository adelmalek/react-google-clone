import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultContextProvider";
import Loading from "./Loading";

export default function Results() {
    const {results, isLoading, searchTerm, getResults} = useResultContext();
    const location = useLocation();

    useEffect( () => {
        if (searchTerm) {
            if (location.pathname === "/video") {
                getResults(`/search/q=${searchTerm} video`)
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=20`)
            }
        }
    }, [searchTerm, location.pathname])

    if (isLoading) {
        return <Loading />;
    }

    switch (location.pathname) {
        case "/search":
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.map( ({ link, title }, index ) => (
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
        case "/image":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map( ({image, link: { href, title }}, index) => (
                        <a key={index} className="p-5 sm:p-3" href={href} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy"/>
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )
        case "/news":
            return (
                <div className="flex flex-wrap justify-between space-y-6 items-center sm:px-56">
                    {results?.map( ({links, id, source, title}) => (
                        <div key={id} className="w-full md:w-2/5">
                            <a className="hover:underline" href={links?.[0].href} target="_blank" rel="noreferrer">
                                <p className="text-lg text-blue-700 dark:text-blue-300">
                                    {title}
                                </p>
                            </a>
                            <div className="flex gap-4">
                                <a href={source?.href} target="_blank" rel="noreferrer">
                                    {source.href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )
        case "/video":
            return "SEARCH";
        default:
            return "ERROR!";
    }
}