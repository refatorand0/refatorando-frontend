import Provider from '../Provider';
import styles from './index.module.css';

export default function MouseArrowDown() {
  return (
    <div className={styles.mouseArrowDown}>
      <Provider>
        <img src="mouse-arrow-down.png" />
      </Provider>
    </div>
  );
};
