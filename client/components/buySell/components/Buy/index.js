import React, { Component } from 'react';

class Buy extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('servers.insert', this.refs.server.value, error => {
      if (error) {
        this.setState({ error: 'Enter a valid name!' });
      } else {
        this.setState({ error: '' });
        this.refs.server.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Add server</label>
          <input ref="server" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Add!</button>
      </form>
    );
  }
}

export default Buy;
