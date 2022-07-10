import React, { useContext, useState, useEffect } from 'react'
import { Button, Heading } from '@aws-amplify/ui-react';
import { userContext } from '../../components/Auth/Auth'
import Recomendations from '../../components/Recomendations/Recomendations';
import styles from './History.module.scss'
import TablePagination from '@mui/material/TablePagination';

import { getHistory } from '../../Backend/ApiCalls'
// Main Component ==============================================================
// =============================================================================

const Home = () => {
  let { user } = useContext(userContext)
  let [recomendations, setRecomendations] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filterSongs = (array) => {
    console.log(array)
    return array.splice(rowsPerPage*page, rowsPerPage)
  }

  useEffect(() => {
    getHistory(user.username)
    .then(songs => {
      setRecomendations(songs || [])
    })
  }, [])

  return (
    <div className={styles.maxwidth}>
      {/* <Header/> */}
      <GetRecomendations recomendations={filterSongs([...recomendations])} />
      <TablePagination
        component="div"
        count={recomendations.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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