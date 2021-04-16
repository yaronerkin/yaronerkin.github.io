import React from 'react';
import classnames from 'classnames';
import Headers from "../components/Header";
import NavLink from "../components/NavLink";
import Image from "../components/Image";
import data from '../data/book.json';
import useInterval from "../hooks/useInterval";
import Camera from "../components/Camera";
import {getNextRenderIndex} from "../lib/utils";

function Book() {
  const [renderIndex, setRenderIndex] = React.useState(0);
  const totalDataIndex = data.length - 1;
  const currentData = data[renderIndex];

  useInterval(() => {
    const nextIndex = getNextRenderIndex(renderIndex, totalDataIndex);
    setRenderIndex(nextIndex);
  }, 5000);

  return (
    <>
      <Headers title="Book" />
      <nav className="page-navigation">
        <NavLink
          url="/gallery"
          className="page-navigation__navigation"
        >
          <span>Catalog</span>
        </NavLink>
        <NavLink
          url="/about"
          className="page-navigation__navigation"
        >
          <span>About</span>
        </NavLink>
      </nav>
      <div className="page-container page-book">
        <main className="main">
          {Array.isArray(currentData) ? (
            <section className={classnames('grid-container', 'template11')}>
              {currentData.map((item) => (
                <NavLink
                  key={item.id}
                  url="/book/[id]"
                  as={`/book/${item.id}`}
                  className="grid-image"
                >
                  <Image
                    key={item.id}
                    src={item.image}
                    content={item.content}
                  />
                </NavLink>
              ))}
              <Camera className="grid-camera" />
            </section>
          ) : (
            <section className={classnames('grid-container', currentData.template)}>
              <NavLink
                url="/book/[id]"
                as={`/book/${currentData.id}`}
                className="grid-image"
              >
                <Image
                  key={currentData.image}
                  src={currentData.image}
                  content={currentData.content}
                />
              </NavLink>
              <Camera className="grid-camera" />
            </section>
          )}
        </main>
      </div>
    </>
  )
}

export default Book
