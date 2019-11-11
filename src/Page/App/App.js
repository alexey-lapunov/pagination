import React from "react";

import { Pagination } from "../../components/Pagination/Pagination";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Pagination countPage={20} activePage={10} pageSize={5} />
    </div>
  );
}

export default App;
