import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navigations/Navbar'
import { CssBaseline } from '@mui/material'
import Bcrumbs from '../navigations/Bcrumbs'
function RootLayout() {
  return (
    <div>
        <header>
            <CssBaseline />
            <Navbar />
            <Bcrumbs />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout