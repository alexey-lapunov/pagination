import React, { useState } from "react";

import classnames from "classnames";

import styles from "./Pagination.module.scss";

const Pagination = ({activePage: activePageProps = 1, pageNumber = 0, pageSize = 5}) =>  {
    const [ activePage, setActivePage ] = useState(activePageProps);
    const [ arrayPages ] = useState(Array.from(Array(pageNumber), (item, i) => i + 1));

    const nextPage = () => {
        if (activePage !== arrayPages.length) setActivePage(activePage + 1);
    };

    const prevPage = () => {
        if (activePage !== 1) setActivePage(activePage - 1);
    };

    const goToPage = index => setActivePage(index);

    const firstPage = () => setActivePage(1);
    const lastPage = () => setActivePage(arrayPages.length);

    const activePageIndex = activePage - 1;
    const firstIndexDisplayedLink = arrayPages[activePageIndex - 3]
        ? (
            arrayPages[activePageIndex + 3]
                ? activePageIndex - 2
                : arrayPages.length - 5
        )
        : 0;
    const lastIndexDisplayedLink = firstIndexDisplayedLink
        ? (
            firstIndexDisplayedLink <= arrayPages.length - 6
                ? activePageIndex + 2
                : arrayPages.length - 1
        )
        : pageSize - 1;

    return (
        <div className={styles.pagination}>
            <button
                type="button"
                onClick={prevPage}
                className={classnames(styles.button, styles.prev)}
            >
                P
            </button>
            {!!firstIndexDisplayedLink && (<>
                <button className={styles.link} onClick={firstPage}>
                    1
                </button>
                <span className={styles.dots}>...</span>
            </>)}

            <ul className={styles.list}>
                {arrayPages.map((item, i) => {
                    if (i >= firstIndexDisplayedLink && i <= lastIndexDisplayedLink) {
                        return (
                            <li className={styles.item} key={i}>
                                <button
                                    className={classnames(styles.link, {
                                        [styles.active]: activePage === item
                                    })}
                                    onClick={() => goToPage(item)}
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
            {lastIndexDisplayedLink !== arrayPages.length - 1 && (<>
                <span className={styles.dots}>...</span>
                <button className={styles.link} onClick={lastPage}>
                    {arrayPages.length}
                </button>
            </>)}
            <button
                type="button"
                onClick={nextPage}
                className={classnames(styles.button, styles.next)}
            >
                N
            </button>
        </div>
    );
};

export { Pagination };