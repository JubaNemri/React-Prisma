import * as React from 'react';
import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";

import { handleAjouterNews } from '../helpers/handlers/ajouterNews';
import { handleEditNewsSubmit } from '../helpers/handlers/editNewsSubmit';
import { handleAddNews } from '../helpers/handlers/addNews';


const AddOrEditNewsModal = ({ isAdd, setNews ,isOpen, onClose , editNews }) => {

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [newNewsName, setNewNewsName] = useState("");

    const handleAction = () => {
      if (isAdd) {
        handleAddNews(newNewsName, setNews, setNewNewsName, onClose);
      } else {
        let editNewsTemp = { id : editNews.id ,name : newNewsName }
        handleEditNewsSubmit(editNewsTemp ,setNews ,onClose)
      }
    };
  
    return (
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isAdd ? "Ajouter" : "Editer"} une nouvelle News</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> Name</FormLabel>
              <Input ref={initialRef} placeholder='Nom' value={newNewsName} onChange={(e) => setNewNewsName(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAction}>
              {isAdd ? "Ajouter" : "Modifier"}
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}
export default AddOrEditNewsModal;