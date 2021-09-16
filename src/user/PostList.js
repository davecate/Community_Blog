import React from "react"
// import useLocation
import Post from "./Post"
import PostLink from "./PostLink"
import NoPostSelectedMessage from "./NoPostSelectedMessage"
import { Route, Switch } from "react-router"

/*
  TODO: Update the below so that the components show on the appropriate route.

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

export const PostList = ({ posts }) => {

  // useLocation goes here

  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ))

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        {/* <Switch> goes here */}
        <Switch>
          {/* url/posts/post.id */}
          <Route exact path="/users/:userId/posts/:postId">
          <Post posts={posts} />
        </Route>
          <Route>
            <NoPostSelectedMessage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default PostList
