import React from "react";

import { Pagination } from "../../components/Pagination/Pagination";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Pagination pageNumber={20} activePage={1} pageSize={5}/>
    </div>
  );
}

export default App;
