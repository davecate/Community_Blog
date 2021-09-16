import React, { useLocation } from "react"
// import useLocation
import Header from "./common/Header"
import CardList from "./home/CardList"
import User from "./user/User"
import NotFound from "./common/NotFound"
import { Switch, Route } from "react-router-dom"

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
    <div>
      <Header />
      <Switch>
              {/* url */}
        <Route exact path={"/"}>
          <CardList />
        </Route>
              {/* url/user/user.id */}
        <Route path={"/users/:userid"}>
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
