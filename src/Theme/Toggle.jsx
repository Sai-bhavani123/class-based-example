import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  toggleBackground() {
    this.setState(prevState => {
      const newMode = !prevState.darkMode;
      // Apply to body immediately
      document.body.className = newMode ? 'dark' : 'light';
      return { darkMode: newMode };
    });
  }

  render() {
    return (
      <div 
        className={`background-toggle ${this.state.darkMode ? 'dark' : 'light'}`}
        onClick={this.toggleBackground}
      >
        {this.state.darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </div>
    );
  }
}

export default Toggle;