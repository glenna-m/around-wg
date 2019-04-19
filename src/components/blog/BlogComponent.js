import React from "react";
import { Jumbotron, Media } from "reactstrap";

import { baseUrl } from "../../shared/baseUrl";

import "./BlogComponent.css";

function Blog() {
  return (
    <React.Fragment>
      <Jumbotron>
        <div className="container">
          <div className="row-header">
            <div className="col-12 navbar-brand app-garden-header">
              Around WG - Blog
            </div>
          </div>

          <div className="row">
            <div className="col-12 app-garden-subheader">
              Sharing life and adventures around Willow Glen
            </div>
          </div>
        </div>
      </Jumbotron>

      <div id="blog-items" className="container">
        <div className="blog-row row">
          <h2 className="blog-date">April 11, 2019</h2>
          <div className="container">
            <div className="row">
              <Media left middle>
                <Media
                  object
                  src={`${baseUrl}assets/images/town/newport-sj-white-lattice.jpg`}
                  alt="White Lattice"
                />
              </Media>
              <Media body>
                <Media heading>Newport Ave, San Jose</Media>
                <p className="blog-p">
                  No more room for potted plants? This creative vertical plant
                  space maker might be the answer.
                </p>
                <p className="blog-p">
                  Spotted this clever lattice trellis while walking the dog.
                  White paint &amp; well-placed lighting make it stand out in
                  the moonlight.
                </p>
              </Media>
            </div>
          </div>
        </div>

        <div className="blog-row row">
          <h2 className="blog-date">April 10, 2019</h2>
          <p className="blog-p">
            Around Willow Glen is a friendly place to learn and share tips about
            life in our local community: events, recommendations, gardening,
            cooking, photography, and more. This is a free resource to the
            community, and is not funded by any business interests. You do not
            need to login to read content, but will need an approved account to
            post. Posts will be moderated for truthful, kind and respectful,
            locally relevant content. Welcome, friend.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blog;
