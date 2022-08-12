import { NavLink } from "react-router-dom";

const links = [
    {url: "/search", text:"All 🔎"},
    {url: "/news", text:"News 📰"},
    {url: "/image", text:"Images 📷"},
    {url: "/video", text:"Videos 🎥"},
]

export default function Links() {
    return (
        <div className="flex justify-between items-center mt-4 sm:justify-around">
            {links.map( ({ url, text }, index) => (
                <NavLink
                    key={index}
                    to={url} 
                    className="text-slate-700 border-slate-700 border-b-2 pb-2 m-2 dark:text-blue-300"
                >
                    {text}
                </NavLink>
            ))}
        </div>
    )
}