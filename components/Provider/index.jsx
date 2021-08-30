import styles from './index.module.css';

export default function Provider ({ children }) {
  return <div className={styles.provider}>{ children }</div>
};
