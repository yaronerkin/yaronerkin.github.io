import React from "react";
import Headers from "../components/Header";
import NavLink from "../components/NavLink";


function Home() {
  return (
    <>
      <Headers title="Home" />
      <nav className="page-navigation">
        <NavLink
          url="/book"
          className="page-navigation__navigation"
        >
          <span>Book</span>
        </NavLink>
        <NavLink
          url="/gallery"
          className="page-navigation__navigation"
        >
          <span>Catalog</span>
        </NavLink>
      </nav>
      <div className="page-container">
        <main className="main">

        </main>
      </div>
    </>
  )
}

export default Home
