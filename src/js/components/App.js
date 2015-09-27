import React, {Component} from 'react';
import styles from '../../less/main.less';

export default class App extends Component {
  render() {
    const message = 'Hello World!';
    return (
      <div>
        <h1 className={styles.bigHeader}>
          {message}
        </h1>
        <h2 className={styles.mediumHeader}>
          {message}
        </h2>
      </div>
    );
  }
}
