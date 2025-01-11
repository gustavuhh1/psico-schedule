import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      Todos os direitos reservados. | Created by
      <a href="https://github.com/gustavuhh1/psico-schedule">
        <img src="../assets/github.svg" alt="logo Github" />
      </a>
    </footer>
  );
}
