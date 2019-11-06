import React from 'react';

import classnames from 'classnames';

import styles from './Pagination.module.scss';

class Pagination extends React.Component {
  render() {
    return (
      <div className={styles.pagination}>
        <button
          type="button"
          className={classnames(styles.button, styles.prev)}
        >
          P
        </button>
        <button className={styles.link}>1</button>
        <span className={styles.dots}>...</span>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.link}>1</button>
          </li>
          <li className={styles.item}>
            <button className={styles.link}>2</button>
          </li>
          <li className={styles.item}>
            <button className={styles.link}>3</button>
          </li>
          <li className={styles.item}>
            <button className={styles.link}>4</button>
          </li>
          <li className={styles.item}>
            <button className={styles.link}>5</button>
          </li>
        </ul>
        <span className={styles.dots}>...</span>
        <button className={styles.link}>20</button>
        <button
          type="button"
          className={classnames(styles.button, styles.next)}
        >
          N
        </button>
      </div>
    );
  }
}

export { Pagination };
