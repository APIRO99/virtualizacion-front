import React from 'react'
import Webcam from 'react-webcam'
import styles from './Camera.module.scss'
import { Button } from '@aws-amplify/ui-react';

const requestAccessCamera = () => {
  try {
    let attributes = { video: true, audio: true };
    let onSuccess = function(localMediaStream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) { };
    }
    let onError = function(err) { console.log(err); }
    navigator.getUserMedia ( attributes, onSuccess, onError );
  } catch(err) {
    console.log(err);
  }
}


const Camera = ({handleImage}) => {
  const width = 600;
  const height = 600;
  const facingMode = 'user';
  const videoConstraints = { width, height, facingMode };

  requestAccessCamera();

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    handleImage(imageSrc)
  },[webcamRef]);

  return (
    <div className={styles.container}>
      <Webcam
        className={styles.video}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <div className={styles.buttons}>
        <Button onClick={capture}>Capture photo</Button>
      </div>
    </div>
  );
};

export default Camera