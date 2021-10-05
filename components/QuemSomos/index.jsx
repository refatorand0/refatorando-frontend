import Provider from '../Provider';
import Cta from '../Cta';

import styles from './index.module.css';

export default function QuemSomos() {
  return (
    <div className={styles.quemSomos} id="quem-somos">
      <Provider>

        <div className={styles.wrapper}>

          <div className={styles.item}>
            <h2>Quem somos</h2>
            <p>Somos uma boutique de softwares fundada em outubro de 2020. O que nos motivou? O amor pela tecnologia, claro! <br /> Nossa missão é fazer com que a tecnologia alcance todas as empresas, sejam elas de pequeno, médio ou grande porte.  Tire suas ideias do papel e conquiste seu espaço nessa nova era digital. Aqui, você encontra tecnologia de ponta em sites personalizados e 100% dinâmicos. Não perca mais tempo, deixe seu e-mail e entraremos em contato:
            </p>

            <div className={styles.containerCta}>
              <Cta
                text="enviar"
              />
            </div>
          </div>

          <div className={styles.item}>
            <img src="mobile.png" />
          </div>

        </div>
      </Provider>
    </div>
  )
};
