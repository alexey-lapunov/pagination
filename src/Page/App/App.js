import React from 'react';

import { Pagination } from '../../components/Pagination/Pagination';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Pagination />
    </div>
  );
}

export default App;
