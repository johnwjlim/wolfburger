import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { graphql } from "gatsby"

import logo from "../images/logo.png"

export default ({ data, image }) => (
  // <div
  //   style={{
  //     background: 'none',
  //     // marginBottom: '3em',
  //     // marginTop: "1.5em",
  //   }}
  // >
  //   <div
  //     // style={{
  //     //   margin: '0 auto',
  //     //   maxWidth: 960,
  //     //   padding: '1.45rem 1.0875rem',
  //     // }}
  //     className="container"
  //     style={{paddingLeft: "3em", paddingRight: "3em"}}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           // maxWidth: "25px",
  //           // maxHeight: "25px",
  //         }}
  //       >
  //         {/* {siteTitle} */}
  //         <img style={{maxWidth:"120px", maxHeight:"120px"}}src={logo} alt="logo" />
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
  <div className="container" id="header" style={{background: "none"}}>
    <div className="row justify-content-center">
      <div className="col">
        <Link to = "/" style={{textDecoration: "none"}}>
          <h5>HOME</h5>
        </Link>
      </div>
      <div className="col">
        {/* <Link to = "page-2" style={{textDecoration: "none"}}>
          <h5>MENU</h5>
        </Link> */}
        <a href="https://www.wolfburgers.com/menu" style={{textDecoration: "none"}}>
          <h5>MENU</h5>
        </a>
      </div>
      <div className="col">
        {/* <Link to = "/" style={{textDecoration: "none"}}>
          <h5>LAIRS</h5>
        </Link> */}
        <a href="https://www.wolfburgers.com/locations" style={{textDecoration: "none"}}>
          <h5>LAIRS</h5>
        </a>
      </div>
      <div className="col">
        <Link to = "/" style={{textDecoration: "none"}}>
          <h5>PRESS</h5>
        </Link>
      </div>
      <div className="col">
        <Link to = "/" style={{textDecoration: "none"}}>
          <h5>CONTACT</h5>
        </Link>
      </div>
    </div>
  </div>
)
