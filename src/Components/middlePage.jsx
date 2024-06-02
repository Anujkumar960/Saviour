import React from 'react';
import { ChakraProvider, Box, Image, extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//   styles: {
//     global: {
//       'html, body': {
//         margin: 0,
//         padding: 0,
//         boxSizing: 'border-box',
//       },
//     },
//   },
// });

const ImageWithArrows = () => {
    const arrowStyles = {
        position: 'absolute',
        width: 0,
        height: 0,
        borderTop: '15px solid transparent',
        borderBottom: '15px solid transparent',
        borderLeft: '15px solid white',
        _before: {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '-90px',
          width: '70px', 
          height: '2px',
          backgroundColor: 'white',
          transform: 'translateY(-50%)',
        },
    }

  return (
   
    <Box position="relative" display="inline-block" bg="black" h="100vh" w="100vw">
    <Image
      src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
      alt="Image with Arrows"
      borderRadius="full"
      boxSize="190px"
    />
    {/* Straight Arrows */}
    <Box {...arrowStyles} top="10%" left="100%" transform="translate(0, -50%)" />
    <Box {...arrowStyles} top="10%" right="100%" transform="rotate(180deg) translate(0, -50%)" />
    {/* Straight and Tilted Arrows */}
    <Box {...arrowStyles} top="10%" left="10%" transform="rotate(45deg) translate(-50%, -10%)" />
    <Box {...arrowStyles} bottom="0" left="50%" transform="rotate(-45deg) translate(-50%, 50%)" />
    {/* Tilted Arrows */}
    <Box {...arrowStyles} top="0" left="100%" transform="rotate(135deg) translate(-50%, -50%)" />
    <Box {...arrowStyles} bottom="0" right="100%" transform="rotate(-135deg) translate(50%, -50%)" />
  </Box>
  );
};

export default ImageWithArrows;
