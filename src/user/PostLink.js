import React from "react"
import { Link, useLocation } from "react-router-dom"
// import Link and useLocation
/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  // useLocation goes here

  return (
    <li className="list-group-item text-truncate">
      {/* Link to url/post.id */}
      <Link to=":userId/posts/:postId">{post.title}</Link>
    </li>
  )
}

export default PostLink
