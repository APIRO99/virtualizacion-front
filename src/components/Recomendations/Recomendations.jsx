import React from 'react';
import styles from './Recomendations.module.scss';
import SpotifyEmbed from '../SpotifyEmbed/SpotifyEmbed'

const Recomendations = ({title, recomendations}) => {
  if (!title) title = "Songs that will improve your mood :)";
  if (!recomendations) recomendations = [];
  
  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.songsContainer}>
        { recomendations.map((id, indx) => (
            <SpotifyEmbed id={id} key={`${indx}_${id}`} />
          ))
        }
      </div>
    </>
  )
}

export default Recomendations