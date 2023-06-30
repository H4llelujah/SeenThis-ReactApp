import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { publicRoutes } from '../router/router'


export default function AppRouter() {
  return (
    <Routes>
        {publicRoutes.map(route => 
            <Route
                path={route.path}
                element={route.component}
                key={route.path}
            />
        )}
    </Routes>
  )
}
