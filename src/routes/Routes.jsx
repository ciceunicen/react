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
import SuperAdmin from '../pages/SuperAdmin'

//imports rutas publicas y privadas
import PrivateRoutes from '../routes/PrivateRoutes'
import PublicRoutes from '../routes/PublicRoutes'


//imports layouts
import LayoutIndex from '../layouts/LayoutIndex'
import RUTAS from '../helpers/RutasHelpers'
import ROLES from '../helpers/RolesHelpers'


export const router = createBrowserRouter(
    [
        {

            path: RUTAS.login,
            element:

                <PublicRoutes>
                    <Login />
                </PublicRoutes>,

            errorElement: < NotFound />,
        },
        {

            path: RUTAS.register,
            element:
                <PublicRoutes>
                    <Register />
                </PublicRoutes>,

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

                        < PrivateRoutes props={{ super: ROLES.super, admin: ROLES.admin }}  >
                            <Admin />
                        </PrivateRoutes>


                },
                {
                    path: RUTAS.superAdmin,
                    element:

                        < PrivateRoutes props={{ super: ROLES.super }} >
                            < SuperAdmin />
                        </PrivateRoutes>


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