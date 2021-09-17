import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./common/Header"
import NotFound from "./common/NotFound"

import CardList from "./home/CardList"
import User from "./user/User"

const App = () => {

  return (
    
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <CardList />
        </Route>
        <Route path={"/users/:userId"}>
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
