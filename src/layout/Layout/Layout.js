import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <span>🧠 QuizHub</span>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer>
        <div className={styles.copyright}>
          © 2025 QuizHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
