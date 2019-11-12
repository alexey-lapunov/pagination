import React, { useState } from 'react';

import classnames from 'classnames';

import styles from './Pagination.module.scss';

const Pagination = ({ activePage: activePageProps = 1, pageNumber = 0, numberPagesVisible = pageNumber }) =>  {
    const [ activePage, setActivePage ] = useState(activePageProps);
    const [ arrayPages ] = useState(Array.from(Array(pageNumber), (item, i) => i + 1));
    const goToNextPage = () => {
        if (activePage !== arrayPages.length) setActivePage(activePage + 1);
    };
    const goToPrevPage = () => {
        if (activePage !== 1) setActivePage(activePage - 1);
    };
    const goToPage = index => setActivePage(index);
    const goToFirstPage = () => setActivePage(1);
    const goToLastPage = () => setActivePage(arrayPages.length);
    const activePageIndex = activePage - 1;
    const numberPagesSides = Math.floor(numberPagesVisible / 2);
    const firstIndexDisplayedLink = arrayPages[activePageIndex - numberPagesSides]
        ? (
            arrayPages[activePageIndex + numberPagesSides]
                ? activePageIndex - numberPagesSides
                : arrayPages.length - numberPagesVisible
        )
        : 0;
    const lastIndexDisplayedLink = firstIndexDisplayedLink
        ? (
            firstIndexDisplayedLink <= arrayPages.length - numberPagesVisible - 1
                ? activePageIndex + numberPagesSides
                : arrayPages.length - 1
        )
        : numberPagesVisible - 1;
    const arrayDisplayedPages = arrayPages
        .map((item, i) => (
            i >= firstIndexDisplayedLink && i <= lastIndexDisplayedLink && item
        ))
        .filter(Boolean);
    const isDisabledPrevButton = !activePageIndex;
    const isDisabledNextButton = activePageIndex === pageNumber - 1;

    return (
        <div className={styles.pagination}>
            <button
                type="button"
                onClick={goToPrevPage}
                disabled={isDisabledPrevButton}
                className={classnames(styles.link, styles.prev, {
                    [styles.disabled]: isDisabledPrevButton,
                })}
            >
                P
            </button>
            {!!firstIndexDisplayedLink && (<>
                <button className={styles.link} onClick={goToFirstPage}>
                    1
                </button>
                <span className={styles.dots}>...</span>
            </>)}

            <ul className={styles.list}>
                {arrayDisplayedPages.map((item, i) => {
                    return (
                        <li className={styles.item} key={i}>
                            <button
                                className={classnames(styles.link, {
                                    [styles.active]: activePage === item,
                                })}
                                onClick={() => goToPage(item)}
                            >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
            {lastIndexDisplayedLink !== arrayPages.length - 1 && (<>
                <span className={styles.dots}>...</span>
                <button className={styles.link} onClick={goToLastPage}>
                    {arrayPages.length}
                </button>
            </>)}
            <button
                type="button"
                onClick={goToNextPage}
                disabled={isDisabledNextButton}
                className={classnames(styles.link, styles.next, {
                    [styles.disabled]: isDisabledNextButton,
                })}
            >
                N
            </button>
        </div>
    );
};

export { Pagination };
