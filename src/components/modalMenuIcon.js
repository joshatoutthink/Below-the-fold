import React, { Component } from 'react'

export default class ModalMenuIcon extends Component {
  render() {
    return (
      <a onClick={this.props.toggle}>
        <div className="modal-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    )
  }
}
