import React from 'react'
import propTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark text-white bg-primary-subtle ">
    <div className="container-fluid m-0 ">
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
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.Dropdown}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">UpperCase</a></li>
              <li><a className="dropdown-item" href="/">LowerCase</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 focus-ring-warning" type="search" placeholder="Search" aria-label="Search"/>
          <button type="button" class="btn btn-primary">Primary</button>
        </form>
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

