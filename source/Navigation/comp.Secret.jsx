import React, {Component} from 'react';
import style from './style.Secret';

let Secret = React.createClass({

  render() {
    return (
      <li className="Secret">
        <a className="Secret__link" href="#secret">Secret</a>
      </li>
    );
  }

});

export default Secret;
