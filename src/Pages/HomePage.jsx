import React from 'react';
import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';
import { Navbar } from '../Components/Navbar';


export const HomePage=()=>{
  return (
      <Box
        className="Home"
        w="100%"
        h="100vh"
        backgroundImage="url('https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Navbar/>
        <Flex
          justifyContent="center"
          alignItems="center"
          h="100%"
          p={[2, 4, 6]}
         
        >
          <Text
            bg={["rgba(0, 0, 0, 0.2)","none","none" ]} 
            color="white"
            p={[2, 4]}
            fontSize={["20px", "30px", "45px"]}
            textAlign="center"
            borderRadius={"10px"}
            maxW="90%"
          >
            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
          </Text>
        </Flex>
      </Box>
  );
}


