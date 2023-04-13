import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

//imports pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Admin from '../pages/Admin'



//imports layouts
import LayoutIndex from '../layouts/LayoutIndex'
import RUTAS from '../helpers/RutasHelpers'
import SuperAdmin from '../pages/SuperAdmin'


export const router = createBrowserRouter(
    [
        {

            path: RUTAS.login,
            element:

                <Login />,

            errorElement: < NotFound />,
        },
        {

            path: RUTAS.register,
            element:

                <Register />,

            errorElement: < NotFound />,
        },
        {

            element: <LayoutIndex />,

            children: [

                {
                    path: RUTAS.help,

                    children: [

                        {
                            path: RUTAS.contact,
                            element:
                                < Contact />
                        },
                    ]
                },

                {
                    path: RUTAS.home,
                    element: < Home />,

                },
                {
                    path: RUTAS.about,
                    element:
                        < About />
                },

                {
                    path: RUTAS.admin,
                    element:

                        <Admin />

                },
                {
                    path: RUTAS.superAdmin,
                    element:

                        <SuperAdmin />

                },
                // {
                //     path: RUTAS.register,
                //     element:

                //         <Register />

                // },
            ]
        }
    ]
)