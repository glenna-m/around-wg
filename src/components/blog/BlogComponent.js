import React from "react";
import { Jumbotron, Media } from "reactstrap";

import { Loading } from '../LoadingComponent';
import { baseUrl } from "../../shared/baseUrl";

import "./BlogComponent.css";

function RenderBlogEntry({ entry }) {
  const entryDate = new Date( entry.date );

  return(
    <div className="blog-row row">

      <h2 className="blog-date"> 
          { entryDate.toLocaleDateString("en-US") } 
      </h2>

      <div className="container">
        <div className="row">
          { entry.photo ? 
             <Media left middle>
               <Media object src={baseUrl + entry.photo} 
                      alt="Blog Entry Photo" />
               </Media> 
            : null 
          }

          <Media body>
            <Media heading> {entry.location} </Media>
              <p className="blog-p">
                {entry.comments}
              </p>
            </Media>

        </div>
      </div>
    </div>
  );
}

function Blog(props) {

  if (props.isLoading) {
    return(
      <Loading />
    );
  }

  if (props.errMess) {
    return(
       <h4>{props.errMess}</h4>
    );
  }

  const blogEntries = props.blogEntries.map((entry) => {
    return (
      <p> <RenderBlogEntry key={entry.id} entry={entry} /> </p>
    );
  });

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
        <Media list>
          {blogEntries}
        </Media>
      </div>
    </React.Fragment>
  );

}

export default Blog;
