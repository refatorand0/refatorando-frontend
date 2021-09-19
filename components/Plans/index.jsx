import Provider from '../Provider';

import styles from './index.module.css';

export default function Plans() {
  return (
    <div className={styles.plans}>
      <Provider>

        <h2>Escolha seu pacote refat</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div>
              <img src="/plans/sites-2.png" />
              <img src="/plans/sites-1.png" />
            </div>
            <div className={styles.container}>
              <p>Tem uma ideia bacana?  Manda pra gente!!! Aqui você encontra sites com layouts exclusivos, dinâmicos e 100% seguros, desenvolvidos com as melhores ferramentas do mercado.</p>
            </div>
          </div>
        </div>

      </Provider>
    </div>
  )
}
