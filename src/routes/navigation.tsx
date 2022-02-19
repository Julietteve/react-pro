import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo}></img>
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive})=> isActive ? 'nav-active' : ''}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive})=> isActive ? 'nav-active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={({isActive})=> isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="users" element={<h1>Users page</h1>} />
                <Route path="about" element={<h1>About page</h1>} />
                <Route path="/" element={<h1>Home page</h1>} />
                <Route path="/*" element={<Navigate to='/' replace/>}/> {/* Con el navigate redirige si la pg no existe, replace para no volver */}
            </Routes>
        </div>
        </BrowserRouter>
    );
};
