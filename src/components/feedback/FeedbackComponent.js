import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AddFeedback from "./AddFeedbackComponent";
import ViewFeedback from "./ViewFeedbackComponent";

import "./FeedbackComponent.scss";

const PANES = {
  AddFeedback: AddFeedback,
  ViewFeedback: ViewFeedback
};

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 0,
          name: "Give Feedback",
          panel: "AddFeedback"
        },
        {
          id: 1,
          name: "View Feedback",
          panel: "ViewFeedback"
        }
      ]
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const tabs = this.state.tabs.map(tab => {
      return <Tab key={"tab-key-" + tab.id}>{tab.name}</Tab>;
    });

    const tabpanes = this.state.tabs.map(tab => {
      let Control = PANES[tab.panel];
      return <Control key={"tab-pane-key-" + tab.id} />;
    });

    const tabpanels = tabpanes.map((pane, idx) => {
      return <TabPanel key={"tab-panel-" + idx}>{pane}</TabPanel>;
    });

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row-header">
              <div className="col-12 navbar-brand app-garden-header">
                Around WG - Feedback
              </div>
            </div>

            <div className="row">
              <div className="col-12 app-garden-subheader">
                Thoughts, requests, or suggestions? Please share them!{" "}
              </div>
            </div>
          </div>
        </Jumbotron>

        <div className="container">
          <Tabs className="feedback-tabs">
            <TabList>{tabs}</TabList>
            {tabpanels}
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default Feedback;
