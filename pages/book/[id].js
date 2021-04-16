import React from "react";
import Headers from "../../components/Header";
import NavLink from "../../components/NavLink";
import {getNextRenderIndex, getPrevRenderIndex, splitContentString} from "../../lib/utils";
import Cursor from "../../components/Cursor";
import data from '../../data/book.json';

const flatData = data.flat();

function SingleBookItem({ item, nextId, prevId }) {
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
          <section className="single-book-post">
            <div className="single-book-post__image">
              <img src={item.image} alt=""/>
            </div>
            <div className="single-book-post__navigation">
              <div className="single-book-post__navigation__item">
                <Cursor isPrev>
                  <NavLink
                    url="/book/[id]"
                    as={`/book/${prevId}`}
                  />
                </Cursor>
              </div>
              <div className="single-book-post__navigation__item">
                <Cursor isNext>
                  <NavLink
                    url="/book/[id]"
                    as={`/book/${nextId}`}
                  />
                </Cursor>
              </div>
            </div>
            <div className="single-book-post__description">
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
    paths: flatData.map((item) => {
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
  const currentIndex = flatData.findIndex(item => `${item.id}` === id);
  const lastIndex = flatData.length - 1;
  const nextIndex = getNextRenderIndex(currentIndex, lastIndex);
  const prevIndex = getPrevRenderIndex(currentIndex, lastIndex);

  return {
    props: {
      item: flatData[currentIndex] || {},
      nextId: flatData[nextIndex].id,
      prevId: flatData[prevIndex].id,
    },
    revalidate: 60
  }
}

export default SingleBookItem
