import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, this.container);
  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div
        ref={node => {
          const container = (this.container = node);
          return container;
        }}
      />
    );
  }
}

export default Accounts;
