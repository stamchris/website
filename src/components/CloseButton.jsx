import React from 'react';

class CloseButton extends React.Component {
  handleClose = () => {
    window.close();
  };

  render() {
    return (
      <button onClick={this.handleClose}>Close Window</button>
    );
  }
}

export default CloseButton;