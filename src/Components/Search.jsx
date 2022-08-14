import Links from "./Links";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../Context/ResultContextProvider";

export default function Search() {
    const [text, setText] = useState("Tupac");
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 300);

    useEffect( () => {
        if (debouncedValue) {
            setSearchTerm(debouncedValue);
        }
    }, [debouncedValue])

    return (
        <div className="relative mt-3 sm:-mt-10 sm:ml-48 md:ml-72">
            <input 
                value={text}
                type="text"
                className="w-80 h-10 p-6 text-black border rounded-full
                           hover:shadow-lg shadow-sm outline-none 
                           sm:w-96 dark:bg-slate-200"
                placeholder="Search GoogL"
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button 
                    type="button"
                    className="absolute top-1.5 right-4 text-2xl text-slate-500"
                    onClick={() => setText("")}
                >
                    X
                </button>
            )}
            <Links />
        </div>
    )
}