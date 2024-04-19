
import { ChakraProvider, Box ,useDisclosure ,RadioGroup ,Stack ,Radio ,Button } from "@chakra-ui/react";
import * as React from 'react';
import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
const SideNav = () => {

      return (
        
          <Box  padding="10"> 
              <Box>
                <PlacementExample/>
              </Box>
          </Box>
      
      );
}

function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  return (
    <>
    
      <Button   size='lg' bg='gray.600' color="white" onClick={onOpen}>
        Naviguer
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' padding="20px">Menu</DrawerHeader>
          <DrawerBody>
            <Box padding ="20px">
                  <Link href="./accueil">Accueil</Link>
            </Box>
            <Box padding ="20px">
                  <Link href="./news"> News </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default SideNav;