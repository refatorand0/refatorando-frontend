import * as React from 'react';

import emailjs from 'emailjs-com';
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

import { useModal } from '../../context/Modal';
import { FaWhatsapp } from 'react-icons/fa';

import styles from './index.module.css';

export default function ModalComponent({ isMobile }) {
  const { isOpen, setIsOpen } = useModal();
  const inputRef = React.useRef();
  const [formResult, setFormResult] = React.useState({
    loading: false,
    message: "Nenhuma",
    success: false,
    warning: false
  });

  const onClose = () => setIsOpen(false);

  const handleSubmit = async event => {

    /* Prevent for default function */
    event.preventDefault();

    /* Set loading to true */
    setFormResult({
      ...formResult,
      loading: true,
    })

    /* Verify if input have at least 3 numbers and if doesn't, return warning message */
    if (inputRef.current.value.length <= 4) {
      setFormResult({
        ...formResult,
        loading: false,
        warning: true,
        message: "Por favor, insira alguma forma de contato válida! =)"
      })
      return inputRef.current.value = "";
    }

    /* Define email Saas template */
    const templateParams = {
      email: inputRef.current.value
    };

    /* Begin fetching the service with provided template */
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER);
    emailjs.send('default_service', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, templateParams)
      .then(response => {
        console.log(response)
        setFormResult({
          ...formResult,
          message: "Muito obrigado pelo interesse! Em breve nossa equipe entrará em contato. =)",
          success: true,
          warning: false,
          loading: false,
        })
        return inputRef.current.value = "";
      })
      .catch(error => console.log(error))
  }

  return (
    <div className={styles.modal}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          background="#1f1f1f"
          p="20px 0px"
          width={isMobile ? '98%' : '100%'}
        >
          <ModalHeader color="#f1f1f1">Preencha os campos abaixo e entraremos em contato:</ModalHeader>
          <ModalCloseButton
            color="#f1f1f1"
            _focus={{
              border: "none"
            }}
          />
          <ModalBody>
            <div className={styles.text}>
              <Input
                placeholder="nome"
                variant="flushed"
                color="white"
                _focus={{
                  borderColor: "#44AEB5"
                }}
              />
              <Input
                placeholder="email ou telefone"
                variant="flushed"
                color="white"
                ref={inputRef}
                onChange={e =>
                  setFormResult({ ...formResult, success: false, warning: false })
                }
                _focus={{
                  borderColor: "#44AEB5"
                }}
              />
            </div>

          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              background="#44AEB5"
              textTransform="uppercase"
              onClick={handleSubmit}
              isLoading={formResult.loading}
              isFullWidth
              mr={2}
              fontSize={isMobile ? "14px" : "16px"}
            >
              enviar
            </Button>
            <Button
              ml={2}
              variant="outline"
              textTransform="uppercase"
              color="#f1f1f1"
              onClick={onClose}
              isFullWidth
              colorScheme="black"
              leftIcon={<FaWhatsapp />}
              fontSize={isMobile ? "14px" : "16px"}
              _hover={{
                backgroundColor: "transparent",
                transition: "all 0.4s ease",
                filter: "brightness(90%)"
              }}
            >
              whatsapp
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </div>
  )
};
