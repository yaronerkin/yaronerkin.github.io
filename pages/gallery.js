import React from "react";
import classnames from "classnames";
import NavLink from "../components/NavLink";
import Headers from "../components/Header";
import GalleryImage from "../components/GalleryImage";
import galleryData from '../data/gallery.json';

function Gallery() {
  return (
    <>
      <Headers title="Gallery" />
      <nav className="page-navigation">
        <NavLink
          url="/book"
          className="page-navigation__navigation"
        >
          <span>Book</span>
        </NavLink>
        <NavLink
          url="/about"
          className="page-navigation__navigation"
        >
          <span>About</span>
        </NavLink>
      </nav>
      <div className="page-container page-gallery">
        <main className="main">
          <section className={classnames('grid-container')}>
            {galleryData.map((item) => (
              <NavLink
                url="/gallery/[id]"
                as={`/gallery/${item.id}`}
                className="grid-image"
              >
                <GalleryImage
                  src={item.image}
                  content={item.content}
                />
              </NavLink>
            ))}
          </section>
        </main>
      </div>
    </>
  )
}

export default Gallery
