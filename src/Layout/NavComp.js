import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <div>
      <h1>Nav Component</h1>
      <Link to="VirtualDom" className='btn btn-primary'>Virtual Dom</Link>{" "}
      <Link to="ParentComp" className='btn btn-primary'>ParentComp</Link>{" "}
      <Link to="images/:id" className='btn btn-primary'>Images</Link>{" "}
      <Link to="hooks" className='btn btn-primary'>React Hook</Link>{" "}
      <Link to="favcolor" className='btn btn-primary'>Fav Color</Link>{" "}
      <Link to="formvalcomp" className='btn btn-primary'>Form Val</Link>{" "}
      <Link to="proddash" className='btn btn-warning'>Products Dashboard</Link>{" "}
      {/* <Link to="prodadd" className='btn btn-warning'>Products Add</Link>{" "}
      <Link to="prodedit" className='btn btn-warning'>Products Edit</Link>{" "} */}
    </div>
  )
}

export default NavComp
