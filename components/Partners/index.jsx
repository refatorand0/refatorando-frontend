import Provider from '../Provider';
import Slider from 'react-slick';

import styles from './index.module.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {
  const PARTNERS_DATA = [
    {
      id: 1,
      title: "WV Makinas",
      logo_src: "/partners/wv-makinas.png",
      width: "200px"
    },
    {
      id: 2,
      title: "Made in Brazil",
      logo_src: "/partners/made-in-brazil.png",
      width: "280px"
    },
    {
      id: 3,
      title: "Advomarketing",
      logo_src: "/partners/advomarketing.png",
      width: "292px"
    },
    {
      id: 4,
      title: "Polisipo",
      logo_src: "/partners/polisipo.png",
      width: "260px"
    },
    {
      id: 5,
      title: "Arthess",
      logo_src: "/partners/arthess.png",
      width: "240px"
    },
    { 
      id: 6,
      title: "Nui",
      logo_src: "/partners/nui.svg",
      width: "90px"
    }

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 1800,
    pauseOnHover: false,
  };

  return (
    <div className={styles.partners}>
      <Provider>

        <div className={styles.partnersContainer}>
          <h2>Parceiros Refat</h2>

          <Slider {...settings}>
            {PARTNERS_DATA.map(item => (

              <div className={styles.item} key={item.id}>

                <img 
                  src={item.logo_src} 
                  title={item.title}
                  style={{
                    width: item.width,
                  }} 
                />

              </div>

            ))}
          </Slider>

        </div>

      </Provider>
    </div>
  )
};
