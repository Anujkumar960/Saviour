import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const FaqComponent = () => {
    useEffect(() => {
        Aos.init({ duration: 4000, delay: 300 });
      }, []);
    
  return (
    <>
      <Box
        height="889px"
        w="100%"
        bg="#0a0a0a"
        display={{ base: "none", md: "block" }}
      >
        <Flex
          boxSizing="border-box"
          pt={"64px"}
          pl={"87px"}
          pr={"100px"}
          justify={"space-between"}
          w="100%"
          alignItems={"start"}
        >
          <Image data-aos="zoom-in-right"  css={{
                transition: "transform 0.3s ease",
                ":hover": {
                    transform: "scale(1.05)",
                    cursor:"pointer"
                }
            }}
            src={"https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"} objectFit={"contain"} w={"503px"} mt={"45px"} />
          <Box width={"640px"}
        >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
              h="100%"
              rowGap={"64px"}
            >
              <Text
                fontSize={"44px"}
                fontWeight={400}
                fontFamily={"Shojumaru"}
                color={"#ED0137"}
              >
                FAQ
              </Text>
              <Accordion w={"100%"} border={"none"} defaultIndex={[3]}>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>1</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>WHY CHOOSE "SAVIOR"?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>2</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>Why is the IDO duration so long?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>3</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When will trading go live?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>4</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When can we claim the tokens?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box
        height="944px"
        w="100%"
        bg="#0a0a0a"
        display={{ base: "block", md: "none" }}
      >
        <Flex
          boxSizing="border-box"
          p={"56px 16px 56px 16px"}
          flexDirection={"column"}
          alignItems={"center"}
          justify={"space-between"}
          w="100%"
        >
          <Text
            fontSize={"32px"}
            fontWeight={400}
            fontFamily={"Shojumaru"}
            color={"#ED0137"}
          >
            FAQ
          </Text>
          <Image  data-aos="zoom-in-right"  css={{
                transition: "transform 0.3s ease",
                ":hover": {
                    transform: "scale(1.05)",
                    cursor:"pointer"
                }
            }} 
            src={"https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"}  w={"395px"} />
          <Box width={"356px"}>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
              h="100%"
            >
              <Accordion w={"100%"} border={"none"} defaultIndex={[3]}>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>1</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>WHY CHOOSE "SAVIOR"?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"16px"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>2</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>Why is the IDO duration so long?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"16px"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>3</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When will trading go live?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"16px"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>4</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When can we claim the tokens?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
