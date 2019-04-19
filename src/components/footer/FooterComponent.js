import React from "react";

import "./FooterComponent.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <hr className="footer-hr" />
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 Around Willow Glen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
