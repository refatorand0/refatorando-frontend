import Provider from '../Provider';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styles from './index.module.css';

const IconProvider = ({ children }) => (
  <IconContext.Provider
    value={{
      size: 22,
      color: "#12FBFF",
    }}
  >
    {children}
  </IconContext.Provider>
);

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Provider>
        <div className={styles.container}>
          <img src="logo.svg" alt="Logo refatorando" />

          <div className={styles.wrapper}>

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

            <nav className={`${styles.item} ${styles.media}`}>

              <ul>
                <li>
                  <div className={styles.icon}>
                    <IconProvider>
                      <FaWhatsapp />
                    </IconProvider>
                  </div>
                  (11) 98634-5917
                </li>

                <li>
                  <div className={styles.icon}>
                    <IconProvider>
                      <FaInstagram />
                    </IconProvider>
                  </div>
                  refatorand0
                </li>

                <li>
                  <div className={styles.icon}>
                    <IconProvider>
                      <FaEnvelope />
                    </IconProvider>
                  </div>
                  siterefatorando@gmail.com
                </li>
              </ul>

            </nav>

          </div>

        </div>
      </Provider>
    </div>
  )
}
