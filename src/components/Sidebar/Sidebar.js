import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h3 className="m-3">Demo Site</h3>
      <div>
        <Link to={'/'}>Items</Link>
        <Link to={'/posts'}>Posts</Link>
      </div>
    </section>
  )
}

export default Sidebar