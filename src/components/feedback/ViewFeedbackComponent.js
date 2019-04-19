import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

import { FEEDBACK } from "../../shared/feedback";
import "./FeedbackComponent.scss";

const RenderFeedbackEntry = ({ entry }) => {
  return (
    <Card className="feedbk-card">
      <CardTitle className="feedbk-card-title">
        <div className="row">
          <div className="col-12 feedbk-name">{entry.name}</div>
        </div>
        <div className="row">
          <div className="col-12">
            {entry.okToContact ? (
              <CardSubtitle>
                {entry.phone}
                <br />
                {entry.email}
              </CardSubtitle>
            ) : null}
          </div>
        </div>
      </CardTitle>

      <CardBody className="feedbk-card-body">
        <div className="row">
          <div className="col-12 feedbk-date">{entry.date}</div>
        </div>

        <div className="row">{entry.message}</div>
      </CardBody>
    </Card>
  );
};

class ViewFeedback extends Component {
  render() {
    const formattedFeedback = FEEDBACK.map(feedback => {
      return (
        <div key={feedback.id} className="col-12 col-md m-1">
          <RenderFeedbackEntry
            key={"feedback-entry-" + feedback.id}
            entry={feedback}
          />
        </div>
      );
    });

    return (
      <div className="feedbk-tabbed-container container">
        <div className="row align-items-start">{formattedFeedback}</div>
      </div>
    );
  }
}

export default ViewFeedback;
