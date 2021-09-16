import React, { useEffect, useState } from "react"
import { Link, Switch, Route } from "react-router-dom"

import UserProfile from "./UserProfile"
import { fetchUserWithPosts } from "../api"
import PostList from "./PostList"
import PostsNav from "./PostsNav"
import ErrorMessage from "../common/ErrorMessage"

// import param and location hooks

export const User = () => {
  const [user, setUser] = useState({ posts: [] })
  const [error, setError] = useState(undefined)
  // useParam goes here
  const userId = 1; // TODO: This ID will need to be pulled from parameters.
  // useLocation goes here

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError)

    return () => abortController.abort()
  }, [userId])

  // TODO: Change the link below to go back to the home page.


  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
        {/* link goes here */}
          <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    )
  }

  /*
    TODO: In the below section, update the links to work appropriately with React Router.

    TODO: You'll need to add nested routes below.

    The <PostList /> component should show on the following route:
    /users/:userId/posts

    The <UserProfile /> component should show on the following route:
    /users/:userId
  */
  return (
    <section className="container">
      <PostsNav />
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          {/* <Link>'s go here */}
          <li className="nav-item">
            <Link to="/users/:userId" className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/users/:userId/posts" className="nav-link">Posts</Link>
          </li>
        </ul>

        {user.id ? (
          <div className="p-4 border border-top-0">
            {/* <Switch></Switch> goes here */}
            <Switch>
              {/* url */}
              <Route exact path="/users/:userId">
                <UserProfile user={user} />
              </Route>
              {/* url/posts */}
              <Route exact path="/users/:userId/posts">
                <PostList posts={user.posts} />
              </Route>
            </Switch>
          </div>
        ) : (
          <div className="p-4 border border-top-0">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default User
