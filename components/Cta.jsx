import { Button } from "@chakra-ui/react";
import { useModal } from '../context/Modal';

export default function Cta({ text }) {
  const { setIsOpen } = useModal();

  const handleClick = () => setIsOpen(true);

  return (
    <Button
      isFullWidth
      colorScheme="teal"
      background="#44AEB5"
      textTransform="uppercase"
      zIndex="90"
      boxShadow="6px 4px 25px rgba(0, 0, 0, 0.25);"
      onClick={handleClick}
    >
      { text }
    </Button>
  );
};
