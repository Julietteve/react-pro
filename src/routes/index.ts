import { lazy, LazyExoticComponent } from "react"
import NonLazy from "../01-lazyload/pages/no-lazy"


type jsxComponent = () => JSX.Element

interface Route {
    to:string,
    path:string,
    Component: LazyExoticComponent<jsxComponent> | jsxComponent,
    name:string
}

 const lazyLayout = lazy( () => import(/* webpackChunckName : lazyLayout */'../01-lazyload/layout/lazyLayout'))


export const routes : Route[] = [
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component : NonLazy,
        name:'No lazy'
        
    },
    {
        to: '/lazy-layout',
        path: '/lazy-layout/*', /** el (*) indica que se van a preocesar dentro de esa ruta, otras rutas hijas */
        Component : lazyLayout,
        name:'Lazy Layout'
        
    },
]