import { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="loader">
          <div className="loader-spinner"></div>
        </div>
      </div>
    );
  }
}

export default Preloader;