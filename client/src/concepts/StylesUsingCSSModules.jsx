import styles from "../app.module.css";

export default function StylesUsingCSSModules() {
  return (
    <div>
      <button className={styles.btn}>Sample button</button>
    </div>
  );
}
