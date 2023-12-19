import React from 'react'
import propTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid m-1 pt-0">
      <a className="navbar-brand " href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-1 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About.js">About</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.Dropdown}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">UpperCase</a></li>
              <li><a className="dropdown-item" href="/">LowerCase</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          
         
        </ul>
        <div className={`form-check form-switch text-${props.mode==='info'?'dark':'light'}  `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
        
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'set title here ',
    Dropdown: 'text here'
}

