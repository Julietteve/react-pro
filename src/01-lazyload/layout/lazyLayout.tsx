import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../pages";

export const lazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout.......</h1>
            <ul>
                <li>
                    <NavLink to="lazy-1"> Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy-2"> Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy-3"> Lazy 3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="lazy-1" element={<LazyLoad1/>}></Route>
                <Route path="lazy-2" element={<LazyLoad2/>}></Route>
                <Route path="lazy-3" element={<LazyLoad3/>}></Route>
                <Route path="*" element={<Navigate to="lazy-1" />}></Route>
            </Routes>
        </div>
    );
};

export default lazyLayout;