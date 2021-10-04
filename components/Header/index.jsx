import Provider from '../Provider';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

import styles from './index.module.css';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.header}>
      <Provider>
        <div className={styles.wrapper}>

          <div className={styles.item}>
            <img src="/logo.svg" alt="Logo refatorando" />
          </div>

          <div className={styles.item}>
            <div
              className={styles.hamburger}
              onClick={onOpen}
            >
              <HamburgerIcon
                color="#f1f1f1"
                w={8}
                h={8}
              />
            </div>

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

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          background="#1f1f1f"
        >
          <DrawerCloseButton
            color="#f1f1f1"
          />

          <DrawerBody
            mt={20}
          >
            <nav className={styles.menuDrawer}>
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
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  )
};
