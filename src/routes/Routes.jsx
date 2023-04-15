import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

//imports pages
import Home from '../pages/Home'
import About from '../pages/About'
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
import Layout_LoginAndRegister from '../layouts/Layout_LoginAndRegister'


export const router = createBrowserRouter(
    [
        {
            element: <Layout_LoginAndRegister />,
            errorElement: < NotFound />,
            children: [

                {
                    path: RUTAS.login,
                    element:
                        <PublicRoutes>
                            < Login />
                        </PublicRoutes>
                },

                {
                    path: RUTAS.register,
                    element:
                        <PublicRoutes>
                            < Register />

                        </PublicRoutes>
                },

            ]

        },

        {
            element: <LayoutIndex />,
            errorElement: < NotFound />,
            children: [

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
            ]
        }
    ]
)