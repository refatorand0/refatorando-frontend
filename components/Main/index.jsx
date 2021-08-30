import Provider from '../Provider';
import Cta from '../Cta';

import styles from './index.module.css';

import { Button } from '@chakra-ui/react';

export default function Main() {
  return (
    <div className={styles.main}>
      <Provider>
        <div className={styles.wrapper}>

          <div className={styles.item}>
            <h1>Entre para a <span>era digital</span></h1>

            <div className={styles.text}>
              <p>Desenvolvemos e refatoramos o seu <span>design</span> - conte com nossas soluções personalizadas para <span>impulsionar o seu negócio</span>.</p>
            </div>

            <div className={styles.containerCta}>
              <Cta 
                text="Saiba mais"
              />
            </div>
          </div>

          <div className={styles.item}>
            <img src="hero.png" alt="hero" />
          </div>

        </div>
      </Provider>
    </div>
  )
};
