import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from ".";
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo}></img>
                    <ul>
                        {
                            routes.map( ({name,to}) => (
                                <li>
                                    <NavLink
                                        key={to} 
                                        to={to} 
                                        className={({isActive})=> isActive ? 'nav-active' : ''}
                                    >
                                        {name} 
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    { routes.map( ({path,Component})  => (
                        <Route 
                            key={path}
                            path={path} 
                            element={<Component/>}
                        />
                      ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </Suspense>
        );
};
