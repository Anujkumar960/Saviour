import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const IntroductionPage = () => {
    useEffect(() => {
        Aos.init({ duration: 4000, delay: 300 });
      }, []);
  return (
    <Box bgColor={"#0a0a0a"} width={"100%"}>
      <Flex
        maxW={"1512px"}
        width={"100%"}
        height={"fit-content"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          width={"50%"}
          gap={6}
          direction={"column"}
          justify={"center"}
          pl={20}
        >
          <Text
            fontFamily={"Shojumaru"}
            fontSize={"44px"}
            fontWeight={"400"}
            lineHeight={"52.36px"}
            textAlign={"left"}
            color={"#ED0137"}
          >
            Introduction
          </Text>

          <Text
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"24px"}
            fontWeight={"400"}
            lineHeight={"28.56px"}
            textAlign={"left"}
            color={"white"}
          >
            We've all been in the mud once, and now we've decided to fight it
            out. <br />
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated
            their love to the blockchain. Save the lucky ones alive, join us to
            save the future!
            <br />
            Our mission is to empower everyone to share wealth and succeed.
            <br />
            <span style={{ color: "#9b9999" }}>read more...</span>
          </Text>

          <Button
            width={"178.94px"}
            height={"54.06px"}
            p={"17.03px 21.29px"}
            borderRadius={"21.92px"}
            background={
              "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            }
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"20px"}
            fontFamily={" ZCOOL KuaiLe"}
            textAlign={"left"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
          >
            Documents &nbsp;
            <ChevronDownIcon fontSize={"22px"} />
          </Button>
        </Flex>

        <Box p={5} boxSizing="border-box">
          <Image 
          data-aos="zoom-in-left" 
           css={{
                transition: "transform 0.3s ease",
                ":hover": {
                    transform: "scale(1.05)",
                    cursor:"pointer"
                }
            }}
             src={"https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__"} w={"100%"} objectFit="cover" />
        </Box>
      </Flex>

      <Flex
        width={"100%"}
        height={"fit-content"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
        display={{ base: "flex", md: "none" }}
        px={2}
      >
        <Flex gap={6} direction={"column"} justify={"center"} p={5}>
          <Text
            fontFamily={"Shojumaru"}
            fontSize={"23px"}
            fontWeight={"400"}
            lineHeight={"27.37px"}
            textAlign={"center"}
            color={"#ED0137"}
          >
            Introduction
          </Text>

          <Image 
          data-aos="zoom-in-left" 
           css={{
                transition: "transform 0.3s ease",
                ":hover": {
                    transform: "scale(1.05)",
                    cursor:"pointer"
                }
            }}
            src={"https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__"} w={"100%"} objectFit="cover" />

          <Text
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"23px"}
            fontWeight={"400"}
            lineHeight={"27.37px"}
            textAlign={"center"}
            color={"white"}
          >
            We've all been in the mud once, and now we've decided to fight it
            out. <br />
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated
            their love to the blockchain. Save the lucky ones alive, join us to
            save the future!
            <br />
            Our mission is to empower everyone to share wealth and succeed.
            <br />
            <span style={{ color: "#9b9999" }}>read more...</span>
          </Text>

          <Button
            width={"178.94px"}
            height={"54.06px"}
            p={"17.03px 21.29px"}
            borderRadius={"21.92px"}
            background={
              "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            }
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"13.92px"}
            fontFamily={" ZCOOL KuaiLe"}
            textAlign={"center"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
            mx={"auto"}
          >
            Documents &nbsp;
            <ChevronDownIcon fontSize={"18px"} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};


