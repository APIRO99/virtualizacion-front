import React, { useEffect, useState } from 'react'
import SpotifyEmbed from '../../components/SpotifyEmbed/SpotifyEmbed'
import { getSongs } from '../../FakeBackend/ApiCalls'

import style from './Recomendations.module.scss'

const Recomendations = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs().then(songs => setSongs(songs))    
  }, [])
  
  return (
    <>
      <div>Songs that will improve your mood :)</div>
      <div className={style.songsContainer}>
        { songs.map(id => (<SpotifyEmbed id={id} key={id} />)) }
      </div>
    </>
  )
}

export default Recomendations