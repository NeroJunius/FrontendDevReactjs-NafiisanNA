import { IRestoCard } from "@/interfaces/restaurants";
import {
  Image,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating"

export default function DetailResto(props: IRestoCard) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Button variant="solid" colorScheme="blue" width={60} onClick={onOpen}>
        LEARN MORE
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.resto_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={props.resto_picture} borderRadius="lg" />
            <Text>{props.resto_description}</Text>
            <Rating rating={props.rating}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
