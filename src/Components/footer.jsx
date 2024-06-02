import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 4000, delay: 300 });
  }, []);

  const footerItems = [
    "Home",
    "IDO",
    "Tokenomics",
    "Road Map",
    "Whitepaper",
    "Pledge",
    "NFT",
    "Games",
  ];
  return (
    <Box
      bg="linear-gradient(180deg, #030405 0%, #120101 100%)"
      h={{ base: "448px", md: "428px" }}
      w="100%"
      boxSizing="border-box"
      paddingTop={"64px"}
      paddingBottom={{ base: "26px", md: "39px" }}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h="100%"
      >
        <Image
          data-aos="fade-up-right"
          data-aos-duration="4000"
          data-aos-delay="300"
          css={{
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.05)",
              cursor: "pointer",
            },
          }}
          src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
          boxSize="163px"
          objectFit="cover"
          alt="Saviour"
          objectPosition={"60% -15%"}
        />
        <Text
          fontFamily={"Poppins"}
          fontSize={"24px"}
          fontWeight={700}
          background="linear-gradient(92.23deg, #FF002A 5.2%, #720005 90.93%)"
          bgClip="text"
        >
          SITEMAP
        </Text>
        <Flex
          columnGap={"32px"}
          rowGap={"16px"}
          h="20px"
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {footerItems.map((item, index) => (
            <Text
              key={index}
              fontSize="14px"
              fontWeight={600}
              fontFamily="Poppins"
              color="white"
              _hover={{ cursor: "pointer",  color:"#ED0137" }}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Flex
          color={"#ED0137"}
          w={"111px"}
          h={"27px"}
          justifyContent={"space-between"}
          mt={{ base: "34px", md: "10px" }}
        >
          <FaTwitter />
          <FaTelegramPlane />
          <IoMdMail />
        </Flex>
      </Flex>
    </Box>
  );
};
