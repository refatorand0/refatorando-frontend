import Provider from '../Provider';
import Cta from '../Cta';
import Slider from 'react-slick';

import styles from './index.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Plan = ({ image, text }) => (
  <div className={styles.plan}>
    <div className={styles.item}>
      <div className={styles.half}>
        <img src={image} />
      </div>
      <div className={`${styles.container} ${styles.half}`}>
        <p>{text}</p>
        <div className={styles.cta}>
          <Cta text="saiba mais" />
        </div>
      </div>
    </div>
  </div>
);

export default function Plans({ isMobile }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isMobile ? false : true,
    autoplay: true,
    autoplayspeed: 1800,
    pauseOnHover: true,
  };

  return (
    <div className={styles.plans}>
      <Provider>

        <h2>Escolha seu pacote refat</h2>
        <div className={styles.wrapper}>

          <Slider {...settings}>
            <Plan
              image="/plans/sites.png"
              text="Tem uma ideia bacana?  Manda pra gente!!! Aqui você encontra sites com layouts exclusivos, dinâmicos e 100% seguros, desenvolvidos com as melhores ferramentas do mercado."
            />
            <Plan
              image="/plans/social.png"
              text="Pensa em divulgar sua marca? Suas redes sociais são ferramentas poderosas e sabendo disso, a Refatorando não poderia deixar de desenvolver criativos de social media exclusivos e prontinhos para alavancar suas redes. Curtiu? Então clica no botão:"
            />
            <Plan
              image="/plans/integrations.png"
              text="Pensa em divulgar sua marca? Suas redes sociais são ferramentas poderosas e sabendo disso, a Refatorando não poderia deixar de desenvolver criativos de social media exclusivos e prontinhos para alavancar suas redes. Curtiu? Então clica no botão:"
            />
          </Slider>

        </div>

      </Provider>
    </div>
  )
}
