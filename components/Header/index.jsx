import Provider from '../Provider';
import styles from './index.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Provider>
        <div className={styles.wrapper}>

          <div className={styles.item}>
            <img src="/logo.svg" alt="Logo refatorando" />
          </div>

          <div className={styles.item}>
            <nav className={styles.menu}>
              {
                [
                  "quem somos",
                  "parceiros",
                  "planos",
                  "contato"
                ].map((item, index) => (
                  <a
                    key={index}
                    className={styles.menuItem}
                  >
                    {item}
                  </a>
                ))
              }
            </nav>
          </div>

        </div>
      </Provider>
    </div>
  )
};
