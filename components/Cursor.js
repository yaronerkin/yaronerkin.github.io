import React from 'react';
import classnames from 'classnames';

const Cursor = ({ isNext, isPrev, children }) => {
  const cursorRef = React.useRef();
  const onMouseMove = (event) => {
    cursorRef.current.style.top = event.clientY + "px";
    cursorRef.current.style.left = event.clientX + "px";
  }

  return (
    <div
      className={classnames('cursor', {
        'cursor_prev': !!isPrev,
        'cursor_next': !!isNext,
      })}
      onMouseMove={onMouseMove}
    >
      {children}
      <div ref={cursorRef} className="cursor__text" />
    </div>
  )
};

export default Cursor
