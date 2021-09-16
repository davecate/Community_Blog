import React from "react"
// import useHistory and useLocation
// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  // useHistory and useLocation go here

  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        {/* <Link> to "/" */}
        <a className="btn btn-link">Go Home</a>
      </li>
    </ol>
  </nav>
)

export default PostsNav
