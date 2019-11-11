import React from "react";

import classnames from "classnames";

import styles from "./Pagination.module.scss";

class Pagination extends React.Component {
  state = {
    activePage: this.props.activePage || 1,
    arrayPages: Array.from(Array(this.props.countPage || 0), (item, i) => i + 1)
  };

  nextPage = () => {
    const { activePage, arrayPages } = this.state;
    if (activePage !== arrayPages.length)
      this.setState({ activePage: activePage + 1 });
  };

  prevPage = () => {
    const { activePage } = this.state;
    if (activePage !== 1) this.setState({ activePage: activePage - 1 });
  };

  goToPage = index => this.setState({ activePage: index });

  firstPage = () => this.setState({ activePage: 1 });
  lastPage = () => this.setState({ activePage: this.state.arrayPages.length });

  render() {
    const { activePage, arrayPages } = this.state;
    const { pageSize } = this.props;
    const activePageIndex = activePage - 1;
    const lastIndexDisplayedLink =
      activePageIndex + pageSize - 1 >= arrayPages.length
        ? arrayPages.length - 1
        : activePageIndex + pageSize - 1;
    const firstIndexDisplayedLink = lastIndexDisplayedLink - (pageSize - 1);

    return (
      <div className={styles.pagination}>
        <button
          type="button"
          onClick={this.prevPage}
          className={classnames(styles.button, styles.prev)}
        >
          P
        </button>
        <button className={styles.link} onClick={this.firstPage}>
          1
        </button>
        <span className={styles.dots}>...</span>
        <ul className={styles.list}>
          {arrayPages.map((item, i) => {
            if (i >= firstIndexDisplayedLink && i <= lastIndexDisplayedLink) {
              return (
                <li className={styles.item} key={i}>
                  <button
                    className={classnames(styles.link, {
                      [styles.active]: activePage === item
                    })}
                    onClick={() => this.goToPage(item)}
                  >
                    {item}
                  </button>
                </li>
              );
            }
          })}
        </ul>
        <span className={styles.dots}>...</span>
        <button className={styles.link} onClick={this.lastPage}>
          {arrayPages.length}
        </button>
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
