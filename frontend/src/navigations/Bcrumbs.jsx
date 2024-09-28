import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Bcrumbs() {
    const location = useLocation()
    console.log(location)
    let currentLink = ''
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !=='')
    .map(crumb => {
      currentLink += `/${crumb}`
      return(
        <div key={crumb}>
  <Link to={currentLink} underline="hover" color='secondary' >{crumb}</Link>
        </div>
      )
    })
 
  return (
    <Breadcrumbs aria-label="breadcrumb" separator=">"> {crumbs}
    </Breadcrumbs>
  )
}

export default Bcrumbs