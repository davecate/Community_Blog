import React, { useEffect, useState } from "react"
import { Link, Switch, Route, useRouteMatch } from "react-router-dom"

import { fetchUserWithPosts } from "../api"
import ErrorMessage from "../common/ErrorMessage"

import PostList from "./PostList"
import PostsNav from "./PostsNav"
import UserProfile from "./UserProfile"

export const User = () => {

  const [user, setUser] = useState({ posts: [] })
  const [error, setError] = useState(undefined)

  const path = useRouteMatch().path
  const url = useRouteMatch().url
  const userId = useRouteMatch().params.userId

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError)

    return () => abortController.abort()
  }, [userId])

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    )
  }

  return (

    <section className="container">

      <PostsNav />

      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">

            <Link to={url} className="nav-link">Profile</Link>

          </li>
          <li className="nav-item">
            <Link to={url + "/posts"} className="nav-link">Posts</Link>
          </li>
        </ul>

        {user.id ? (

          <div className="p-4 border border-top-0">

            <Switch>
              <Route path={path + "/posts"}>
                <PostList posts={user.posts} />
              </Route>
              <Route path={path}>
                <UserProfile user={user} />
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
