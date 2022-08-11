import { NavLink } from "react-router-dom";

export default function Links() {
    const links = [
        {url: "/search", text:"All 🔎", id:0},
        {url: "/news", text:"News 📰", id:1},
        {url: "/image", text:"Images 📷", id:2},
        {url: "/video", text:"Videos 🎥", id:3},
    ]
    return (
        <div className="flex justify-between items-center mt-4 sm:justify-around">
            Links
        </div>
    )
}