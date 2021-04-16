import React from 'react';

function Sketchfab({ title, src }) {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe title={title} src={src} frameBorder="0" allowFullScreen mozallowfullscreen="true"
              webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking
              execution-while-out-of-viewport execution-while-not-rendered web-share>
      </iframe>
    </div>
  )
}

export default Sketchfab
