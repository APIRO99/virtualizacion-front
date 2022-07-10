import React, { useContext, useState } from 'react'
import { Button, Heading } from '@aws-amplify/ui-react';
import { userContext } from '../../components/Auth/Auth'
import Recomendations from '../../components/Recomendations/Recomendations';
import defaultPhoto from '../../Images/default_photo.png'
import styles from './Home.module.scss'

import Popup from 'reactjs-popup';
import Camera from '../../components/Camera/Camera'

// import { getRecomendations, saveRecomendations } from '../../FakeBackend/ApiCalls'
import { getRecomendations, saveRecomendations } from '../../Backend/ApiCalls'

// Main Component ==============================================================
// =============================================================================

const Home = () => {
  let { user } = useContext(userContext)
  let [imageSrc, setImageSrc] = useState();
  let [recomendations, setRecomendations] = useState([]);
  let [emotion, setEmotion] = useState('');

  let handleSubmit = async () => {
    getRecomendations(imageSrc)
    .then(({songs, emotion }) => {
      if(songs.length === 0) return;
      setRecomendations(songs);
      setEmotion(emotion);
      saveRecomendations({id: user.username, data: songs});
    })
  }

  return (
    <div className={styles.maxwidth}>
      <Header user={user}/>
      <PicturControls setImageSrc={setImageSrc} imageSrc={imageSrc}/>
      <GetRecomendations handleSubmit={handleSubmit} imageSrc={imageSrc} recomendations={recomendations} emotion={emotion}/>
    </div>
  )
}

// AUX Components ==============================================================
// =============================================================================

let Header = ({ user }) => (
  <>
    {/* <Heading className={styles.separatorMargin} level={1}>Hello {user.attributes.email}</Heading> */}
    <Heading className={um([styles.separatorMargin, styles.title])} level={4}>To start with the recomendations we need a picture first 😊</Heading>
    {/* <Button onClick={signOut}>Sign out</Button> */}
  </>
);

let PicturControls = ({ setImageSrc, imageSrc }) => {
  let popUpStyle = {
    width: "80%",
    maxWidth: "400px",
    maxHeight: "600px"
  }
  return (
    <>
      <div className={um([styles.buttons, styles.separatorMargin])}>
        <Popup 
          contentStyle={popUpStyle}
          trigger={<Button>Camera</Button>} modal>
          <Camera handleImage={setImageSrc}/>
        </Popup>
        <Button>
          <label>
          Upload
          <input
            type="file"
            name="myImage"
            hidden
            onChange={({target}) => {
              getBase64(target.files[0]).then(img => setImageSrc(img));
            }}
          />
          </label>
        </Button>
      </div>
      <div className={um([styles.center, styles.maxwidth, styles.separatorMargin])}>
        <img className={styles.image} src={imageSrc || defaultPhoto} alt="default" />
      </div>
    </>
  );
};

let GetRecomendations = ({ handleSubmit, imageSrc, recomendations, emotion }) => (
  <>
    <Button 
      className={styles.separatorMargin}
      style={{marginLeft: '5%', marginRight:'5%', width:'90%'}}
      onClick={handleSubmit}
      disabled={(!imageSrc)}
    >
      Get Recomendation
    </Button>
    {(recomendations && recomendations.length > 0)
      ? (<Recomendations 
            recomendations={recomendations} 
            title={`Your current mood is ${emotion}`}
          />)
      : (<p className={styles.center}>Here will appear your recomendations :)</p>)
    }
  </>
)

// AUX Functions ===============================================================
// =============================================================================

let um = (array) => array.reduce((acc, next) => `${acc} ${next}`,'');

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


export default Home