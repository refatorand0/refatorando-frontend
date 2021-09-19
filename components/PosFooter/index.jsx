import Provider from '../Provider';

import styles from './index.module.css';

export default function PosFooter() {
  return (
    <div className={styles.posFooter}>
      <Provider>

        <div className={styles.content}>
          <p>©2021 refatorando - todos os direitos reservados</p>
        </div>

      </Provider>
    </div>
  )
};
