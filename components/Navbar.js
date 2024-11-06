import React from 'react'

function Navbar() {
  return (
    <div className=" mx-auto flex justify-between">

      <div className="flex">
        <a className="btn btn-ghost text-xl font-mono">Real State</a>
      </div>

      <div className="flex">
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
      </div>

      <div className="flex">
        <a>Link</a>
        <a>Link</a>
      </div>
    </div>
  )
}

export default Navbar