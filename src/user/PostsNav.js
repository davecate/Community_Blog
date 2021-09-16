import React from "react"
import { Link } from "react-router-dom"
// import useHistory and useLocation
// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  // useHistory and useLocation go here

  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        {/* <Link> to "/" */}
        <Link to="/" className="btn btn-link">Go Home</Link>
      </li>
    </ol>
  </nav>
)

export default PostsNav
