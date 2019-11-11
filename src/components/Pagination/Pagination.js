import React from "react";

import classnames from "classnames";

import styles from "./Pagination.module.scss";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.pages = Array.from(Array(10), (item, i) => i + 1);
  }
  state = {
    activePage: 1
  };

  nextPage = () => {
    const { activePage } = this.state;
    if (activePage !== this.pages.length)
      this.setState({ activePage: activePage + 1 });
  };

  prevPage = () => {
    const { activePage } = this.state;
    if (activePage !== 1) this.setState({ activePage: activePage - 1 });
  };

  render() {
    const pageSize = 5;
    const { activePage } = this.state;

    return (
      <div className={styles.pagination}>
        <button
          type="button"
          onClick={this.prevPage}
          className={classnames(styles.button, styles.prev)}
        >
          P
        </button>
        <button className={styles.link}>1</button>
        <span className={styles.dots}>...</span>
        <ul className={styles.list}>
          {this.pages.map((item, i) => (
            <li className={styles.item} key={i}>
              <button
                className={classnames(styles.link, {
                  [styles.active]: activePage === item
                })}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <span className={styles.dots}>...</span>
        <button className={styles.link}>20</button>
        <button
          type="button"
          onClick={this.nextPage}
          className={classnames(styles.button, styles.next)}
        >
          N
        </button>
      </div>
    );
  }
}

export { Pagination };
