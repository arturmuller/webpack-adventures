import React, {Component} from 'react';
import Secret from './comp.Secret';
import style from './style.Navigation';

let Navigation = React.createClass({

  getInitialState(){
    return {isShown: false};
  },

  showSecretLink(){
    this.setState({isShown: true});
  },

  render() {
    return (
      <nav className="Navigation">
        <ul className="Navigation__list">
          <li className="Navigation__list__item">
            <a className="Navigation__link" href="#about">About</a>
          </li>
          <li className="Navigation__list__item">
            <a className="Navigation__link" href="#features">Features</a>
          </li>
          <li className="Navigation__list__item">
            <a className="Navigation__link" href="#pricing">Pricing</a>
          </li>
          {this.renderSecretLink()}
        </ul>
        <button onClick={this.showSecretLink}>Show secret link</button>
      </nav>
    );
  },

  renderSecretLink(){
    if (this.state.isShown) {
      return (
        <Secret />
      );
    }

    return null;
  }
});

export default Navigation;
