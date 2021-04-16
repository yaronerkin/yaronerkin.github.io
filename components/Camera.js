import React from 'react';
import classnames from 'classnames';
import Webcam from "react-webcam";

const Camera = ({ className }) => {
  return (
    <div className={classnames('camera-container', className)}>
      <div className="camera-container__camera">
        <Webcam
          audio={false}
        />
      </div>
    </div>
  )
};

export default Camera
