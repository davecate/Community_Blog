import React from "react"
// import useLocation
import Post from "./Post"
import PostLink from "./PostLink"
import NoPostSelectedMessage from "./NoPostSelectedMessage"

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
        {/* url/posts */}
        <NoPostSelectedMessage />
        {/* url/posts/post.id */}
        <Post posts={posts} />
      </div>
    </div>
  )
}

export default PostList
