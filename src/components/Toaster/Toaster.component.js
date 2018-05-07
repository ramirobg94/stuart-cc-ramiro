import React, { Component } from "react";

import PropTypes from "prop-types";

import "./Toaster.css";

export default class Toaster extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  componentDidUpdate() {
    this.timeout = setTimeout(() => {
      this.props.closeToaster();
    }, 5000);
  }
  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  render() {
    if (this.props.toaster) {
      return (
        <div onClick={() => this.props.closeToaster()} className="Toaster">
          <p>Job has been created successfully!</p>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

Toaster.propTypes = {
  closeToaster: PropTypes.func
};
