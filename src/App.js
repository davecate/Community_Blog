import React, { Fragment } from "react"
// import useLocation
import Header from "./common/Header"
import CardList from "./home/CardList"
import User from "./user/User"

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  // useLocation goes here

  return (
    // <Switch> goes here
    <Fragment>
      <Header />
      {/* url/user/user.id */}
      <User />
      {/* url */}
      <CardList />
      {/* NotFound goes here */}
    </Fragment>
  )
}

export default App
