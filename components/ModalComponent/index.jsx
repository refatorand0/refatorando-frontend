import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

import { useModal } from '../../context/Modal';

import styles from './index.module.css';

export default function ModalComponent() {
  const { isOpen, setIsOpen } = useModal();

  const onClose = () => setIsOpen(false);

  return (
    <div className={styles.modal}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent 
          background="#1f1f1f"
          p="20px 0px"
        >
          <ModalHeader color="#f1f1f1">Entre em contato:</ModalHeader>
          <ModalCloseButton
            color="#f1f1f1"
            _focus={{
              border: "none"
            }}
          />
          <ModalBody>
            <div className={styles.text}>
              <p>Insira seu e-mail ou telefone que a gente vai até você!</p>
              <Input
                placeholder="(xx)xxxxx-xxxx"
                variant="flushed"
                color="white"
                _focus={{
                  borderColor: "#44AEB5"
                }}
              />
            </div>

            <div className={styles.whatsappLink}>
              <p>
                Ou entre em contato via
                <Button
                  color="#44AEB5"
                  variant="link"
                  margin="0px 5px"
                >
                  whatsapp <ExternalLinkIcon margin="0px 2px" />
                </Button>
              </p>
            </div>

          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              background="#44AEB5"
              textTransform="uppercase"
              onClick={onClose}
              isFullWidth
            >
              enviar
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </div>
  )
};
