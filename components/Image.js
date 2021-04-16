import React from 'react';
import classnames from 'classnames';
import {buildImagePath, splitContentString} from "../lib/utils";

const Image = ({ content, src, alt }) => {
  const [isMouseOver, setMouseOver] = React.useState(false);

  return (
    <div
      className={classnames('image-container', {
        'image-container_hover': isMouseOver
      })}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="image-container__content">
        {splitContentString(content).map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="image-container__image">
        <img src={buildImagePath(src)} alt={alt} />
      </div>
    </div>
  )
};

export default Image
