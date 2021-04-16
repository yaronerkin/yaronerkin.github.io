import React from "react";
import Headers from "../../components/Header";
import NavLink from "../../components/NavLink";
import {getNextRenderIndex, getPrevRenderIndex, splitContentString} from "../../lib/utils";
import Cursor from "../../components/Cursor";
import Sketchfab from "../../components/Sketchfab";
import galleryData from '../../data/gallery.json';

function SingleGalleryItem({ item, nextId, prevId }) {
  return (
    <>
      <Headers title={item.title} />
      <nav className="page-navigation">
        <NavLink
          url="/gallery"
          className="page-navigation__navigation"
        >
          <span>Catalog</span>
        </NavLink>
        <NavLink
          url="/book"
          className="page-navigation__navigation"
        >
          <span>Book</span>
        </NavLink>
      </nav>
      <div className="page-container page-single-gallery">
        <main className="main">
          <section className="single-gallery-post">
            <div className="single-gallery-post__image">
              <Sketchfab title={item.title} src={item.sketchfabEmbed} />
            </div>
            <div className="single-gallery-post__navigation">
              <div className="single-gallery-post__navigation__item">
                <Cursor isPrev>
                  <NavLink
                    url="/gallery/[id]"
                    as={`/gallery/${prevId}`}
                  />
                </Cursor>
              </div>
              <div className="single-gallery-post__navigation__spacer" />
              <div className="single-gallery-post__navigation__item">
                <Cursor isNext>
                  <NavLink
                    url="/gallery/[id]"
                    as={`/gallery/${nextId}`}
                  />
                </Cursor>
              </div>
            </div>
            <div className="single-gallery-post__description">
              {splitContentString(item.content).map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: galleryData.map((item) => {
      return {
        params: {
          id: `${item.id}`,
        },
      }
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const currentIndex = galleryData.findIndex(item => `${item.id}` === id);
  const lastIndex = galleryData.length - 1;
  const nextIndex = getNextRenderIndex(currentIndex, lastIndex);
  const prevIndex = getPrevRenderIndex(currentIndex, lastIndex);

  return {
    props: {
      item: galleryData[currentIndex] || {},
      nextId: galleryData[nextIndex].id,
      prevId: galleryData[prevIndex].id,
    },
    revalidate: 60
  }
}

export default SingleGalleryItem
