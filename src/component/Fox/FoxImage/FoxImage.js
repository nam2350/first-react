import React from "react";

import { FOX_API_URL } from "../../../config";

class FoxImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FoxUrl: "",
    };
  }

  componentDidMount() {
    fetch(FOX_API_URL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          FoxUrl: data.image,
        });
      });
  }

  render() {
    return (
      <div style={{ padding: "3px" }}>
        <img
          src={this.state.FoxUrl}
          alt="image url"
          style={{ width: "100px", height: "100px", padding: "5px" }}
        />
      </div>
    );
  }
}

export default FoxImage;
