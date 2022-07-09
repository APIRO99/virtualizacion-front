import React, { useContext, useState, useEffect } from 'react'
import { Button, Heading } from '@aws-amplify/ui-react';
import { userContext } from '../../components/Auth/Auth'
import Recomendations from '../../components/Recomendations/Recomendations';
import styles from './History.module.scss'

import { getHistory } from '../../Backend/ApiCalls'

// Main Component ==============================================================
// =============================================================================

const Home = () => {
  let { user } = useContext(userContext)
  let [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    console.log(user.username)
    getHistory(user.username)
    .then(songs => {
      setRecomendations(songs)
    })
  }, [])

  return (
    <div className={styles.maxwidth}>
      <Header/>
      <GetRecomendations recomendations={recomendations} />
    </div>
  )
}

// AUX Components ==============================================================
// =============================================================================

let Header = () => (
  <>
    <Heading className={styles.separatorMargin} level={4}>
      Your history of recomendations will appear here!
    </Heading>
  </>
);

let GetRecomendations = ({ recomendations }) => (
  <>
    {(recomendations && recomendations.length > 0)
      ? (<Recomendations recomendations={recomendations} />)
      : (<p className={styles.center}>You dont have a history :(</p>)
    }
  </>
)

// AUX Functions ===============================================================
// =============================================================================

let um = (array) => array.reduce((acc, next) => `${acc} ${next}`,'');

export default Home