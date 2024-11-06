import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
const FavoritesPage = lazy (() => import('./views/FavoritesPage'))


import Layout from "./layouts/Layout"
export default function Approuter() {
  return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<IndexPage/>} index/>
                    <Route path='/favoritos' element={
                        <Suspense fallback="Cargando.." >
                                <FavoritesPage/>
                        </Suspense>
                        } />
                </Route>
            </Routes>
        </BrowserRouter>

  )
}
