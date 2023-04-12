import React from 'react'
import { Outlet, useNavigation, Navigate } from 'react-router-dom'

const LayoutIndex = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default LayoutIndex