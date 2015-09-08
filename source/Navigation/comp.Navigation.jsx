import React from 'react';
import style from './style.Navigation';

export default class {

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
        </ul>
      </nav>
    );
  }
}
