import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const links = [
        {path:"/", title:"Home"},
        {path:"/about", title:"About"},
        {path:"/product", title:"Product"},
        {path:"/contact", title:"Contact"},
        {path:"/login", title:"Login"},
        // {path:"/", title:"Home"},
        // {path:"/", title:"Home"}
    ]

  return (
    <div style={{display:"flex", 
    justifyContent:"space-around",
    padding:"20px"
    }}>
      {links.map((e)=>{
        return(
          <Link key={e.path} to={e.path}>{e.title}</Link>
        );
      })}
    </div>
  )
}

export default Navbar
