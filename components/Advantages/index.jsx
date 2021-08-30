import Provider from '../Provider';

import styles from './index.module.css';

const DATA = [
  {
    id: 1,
    src: "/advantages-1.svg",
    text: "Seu site totalmente seguro"
  },
  {
    id: 2,
    src: "/advantages-2.svg",
    text: "Sites responsivos e dinâmicos"
  },
  {
    id: 3,
    src: "/advantages-3.svg",
    text: "Seu site com design moderno e tecnologia de ponta"
  }
];

export default function Advantages() {
  
  const Item = ({ src, text }) => (
    <div className={styles.item}>
      <img src={src} />
      <p>{ text }</p>
    </div>
  );

  return (
    <div className={styles.advantages}>
      <Provider>

        <div className={styles.wrapper}>

          {DATA.map(item => (
            <div key={item.id}>
              <Item 
                src={item.src}
                text={item.text}
              />
            </div>
          ))}

        </div>

      </Provider>
    </div>
  );
};
