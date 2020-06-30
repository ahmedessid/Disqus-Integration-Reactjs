import React, { Component } from "react";
import Disqus from "disqus-react";

import "./App.css";

export default class App extends Component {
  render() {
    const disqusShortname = "elfen"; //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://localhost:3000/", //this.props.pageUrl
      identifier: "article-id", //this.props.uniqueId
      title: "Title of Your Article", //this.props.title
      language: "zh_TW"
    };

    return (
      <div className="article-container">
        <h1>Article Title</h1>

        <p>Article content.</p>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}
