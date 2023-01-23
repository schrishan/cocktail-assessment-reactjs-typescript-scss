import React, {Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import { Preloader } from "../components";

const Home = React.lazy (() =>  import('../pages/Home'));
const Search = React.lazy(() => import('../pages/Search'));
const Favourites = React.lazy(() => import('../pages/Favourites'));
const CocktailDetail = React.lazy(()=> import('../pages/CocktailDetail'))
const NotFound = React.lazy(() => import('../pages/NotFound'));

const LazyRoute = () => {
    return(
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/search' element={<Search/>}/>
                <Route path='/favourites' element={<Favourites/>} />
                <Route path='/cocktail/:itmId' element={<CocktailDetail/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Suspense>
    )
}

export default LazyRoute;