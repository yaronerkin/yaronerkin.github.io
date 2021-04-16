import React from 'react';
import classnames from 'classnames';
import {splitContentString} from "../lib/utils";


const GalleryImage = ({ content, src, alt }) => {
  const [isMouseOver, setMouseEnter] = React.useState(false);

  return (
    <div
      className={classnames('image-container', {
        'image-container_hover': isMouseOver
      })}
      onMouseEnter={() => setMouseEnter(!isMouseOver)}
    >
      <div className="image-container__content">
        {splitContentString(content).map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="image-container__image">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
};

export default GalleryImage
