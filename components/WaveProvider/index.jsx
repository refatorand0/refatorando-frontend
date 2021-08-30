import styles from './index.module.css';

export default function WaveProvider({ children }) {
  return (
    <div className={styles.wavesProvider}>
      { children }
    </div>
  );
};
