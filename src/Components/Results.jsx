import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultContextProvider";
import Loading from "./Loading";

export default function Results() {
    const {results, isLoading, searchTerm, getResults} = useResultContext();
    const location = useLocation();

    if (isLoading) return <Loading />;

    return (
        <div>Results</div>
    )
}