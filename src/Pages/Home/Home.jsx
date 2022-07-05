import React, { useContext } from 'react'
import { Button, Heading } from '@aws-amplify/ui-react';
import { userContext } from '../../components/Auth/Auth'

const Home = () => {
  let { user, signOut } = useContext(userContext)
  return (
    <>
      <div>Home :)</div>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </>
  )
}
export default Home