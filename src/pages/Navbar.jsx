//import React from 'react'
import { Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Self mangement</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">TODO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="events">EVENTS</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="contacts">CONTACTS</a>
          </li>
          </ul>
         
        </div>
      </div>
    </nav>
    
    <br></br>
    <div>
    <div className="container text-center">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
    <Outlet></Outlet>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
      
    </div>
    </>

  )
}

export default Navbar