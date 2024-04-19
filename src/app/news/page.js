"use client"
import { useState } from 'react';
import { Button ,FormLabel, FormControl ,Input,Text,Box, Square,Center,useDisclosure, Flex , ChakraProvider  ,IconButton } from "@chakra-ui/react";
import SideNav from '../components/sidenav';
import * as React from 'react';
import { DeleteIcon ,EditIcon } from "@chakra-ui/icons";

import { handleDeleteNews } from './helpers/handlers/deleteNews';
import AddOrEditNewsModal from './modals/addOrEditNews';


export default function Page() {

  const [news, setNews] = useState([
    { id: 1, name: " news 1" },
    { id: 2, name: " news 2" },
    { id: 3, name: " news 3" },
    { id: 4, name: " news 4" },
    { id: 5, name: " news 5" },
    { id: 6, name: " news 6" }
  ]);

  const [isAdd  , setIsAdd] =useState(false) ;
  const [isOpen ,setIsOpen] =useState(false) ;
  const [editNews ,setEditNews] =useState({id : null , name : ""});

  return (
  <>
    <ChakraProvider>
      <Flex h="100vh" color='white' bg="gray.800">
      
        <Square bg='teal.400' size='20%' h="100vh">
          <Text as="b" color="white" fontSize="2xl" > <SideNav/></Text>
        </Square>

      
        <Flex flex='1' flexDirection="column"  justify="space-around">
          
          <Flex justify="space-around" p="4">
            <Text as="b" color="white" fontSize="5xl"> News</Text>

            <Button onClick={() =>{ setIsOpen(true), setIsAdd(true) }} colorScheme='teal' size='sm'>
                Ajouter
            </Button>

          </Flex>

          <Flex  as="b" color="white" fontSize="3xl" justify="space-around" p="4" flexDirection="column" alignItems="space-around">

          {news.map(singleNews => (
            <Box key={singleNews.id} bg='gray.700' borderWidth="1px" borderRadius="md" p="4" marginBottom="10px">
              <Flex justifyContent="space-between" alignItems="center">
                <Text>{singleNews.name}</Text>
                <Flex>
                  <IconButton
                    colorScheme="teal.400"
                    aria-label="Editer"
                    icon={<EditIcon />}
                    onClick={() => { setIsOpen(true); setIsAdd(false); setEditNews(singleNews); }}
                  />
                  <IconButton
                    colorScheme="red"
                    aria-label="Supprimer"
                    icon={<DeleteIcon />}
                    onClick={() => handleDeleteNews(singleNews.id, setNews)}
                  />
                  <AddOrEditNewsModal
                    isAdd={isAdd}
                    setNews={setNews}
                    isOpen={isOpen}
                    onClose={() => { setIsOpen(false); }}
                    editNews={editNews}
                  />
                </Flex>
              </Flex>
            </Box>
          ))}


          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>

        
    </>
  )
}

