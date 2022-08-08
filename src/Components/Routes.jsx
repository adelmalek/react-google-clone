import { Routes, Route } from "react-router-dom";
import Results from "./Results";

export default function RoutEs() {
    return (
        <div className="p-4">
            <Routes>
                <Route path="/">
                    <Route path="/search" />
                </Route>
                <Route path="/search" element={<Results />} />
                <Route path="/images" element={<Results />} />
                <Route path="/news" element={<Results />} />
                <Route path="/videos" element={<Results />} />      
            </Routes>
        </div>
    )
}